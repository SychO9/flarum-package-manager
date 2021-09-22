<?php

/**
 *
 */

namespace SychO\PackageManager;

use Flarum\Extend;
use Flarum\Foundation\Paths;
use Flarum\Frontend\Document;
use SychO\PackageManager\Exception\ComposerCommandFailedExceptionHandler;
use SychO\PackageManager\Exception\ComposerRequireFailedException;

return [
    (new Extend\Routes('api'))
        ->post('/package-manager/extensions', 'package-manager.extensions.require', Api\Controller\RequireExtensionController::class)
        ->patch('/package-manager/extensions/{id}', 'package-manager.extensions.update', Api\Controller\UpdateExtensionController::class)
        ->delete('/package-manager/extensions/{id}', 'package-manager.extensions.remove', Api\Controller\RemoveExtensionController::class),

    (new Extend\Frontend('admin'))
        ->css(__DIR__ . '/less/admin.less')
        ->js(__DIR__ . '/js/dist/admin.js')
        ->content(function (Document $document) {
            $paths = resolve(Paths::class);

            $document->payload['isRequiredDirectoriesWritable'] = is_writable($paths->vendor)
                && is_writable($paths->storage.'/.composer')
                && is_writable($paths->base.'/composer.json')
                && is_writable($paths->base.'/composer.lock');
        }),

    new Extend\Locales(__DIR__ . '/locale'),

    (new Extend\ServiceProvider)
        ->register(PackageManagerServiceProvider::class),

    (new Extend\ErrorHandling)
        ->handler(ComposerRequireFailedException::class, ComposerCommandFailedExceptionHandler::class),
];
