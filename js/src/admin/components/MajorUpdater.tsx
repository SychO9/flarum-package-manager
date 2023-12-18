import type Mithril from 'mithril';
import app from 'flarum/admin/app';
import Component, { ComponentAttrs } from 'flarum/common/Component';
import Button from 'flarum/common/components/Button';
import Tooltip from 'flarum/common/components/Tooltip';
import Alert from 'flarum/common/components/Alert';

import { UpdatedPackage, UpdateState } from '../states/ControlSectionState';
import WhyNotModal from './WhyNotModal';
import ExtensionItem from './ExtensionItem';
import classList from 'flarum/common/utils/classList';

export interface MajorUpdaterAttrs extends ComponentAttrs {
  coreUpdate: UpdatedPackage;
  updateState: UpdateState;
}

export type MajorUpdaterLoadingTypes = 'major-update' | 'major-update-dry-run';

export default class MajorUpdater<T extends MajorUpdaterAttrs = MajorUpdaterAttrs> extends Component<T> {
  updateState!: UpdateState;

  oninit(vnode: Mithril.Vnode<T, this>) {
    super.oninit(vnode);

    this.updateState = this.attrs.updateState;
  }

  view(): Mithril.Children {
    // @todo move Form-group--danger class to core for reuse
    return (
      <div
        className={classList('Form-group Form-group--danger PackageManager-majorUpdate', {
          'PackageManager-majorUpdate--failed': this.updateState.status === 'failure',
          'PackageManager-majorUpdate--incompatibleExtensions': this.updateState.incompatibleExtensions.length,
        })}
      >
        <img alt="flarum logo" src={app.forum.attribute('baseUrl') + '/assets/extensions/flarum-package-manager/flarum.svg'} />
        <label>{app.translator.trans('flarum-package-manager.admin.major_updater.title', { version: this.attrs.coreUpdate['latest-major'] })}</label>
        <p className="helpText">{app.translator.trans('flarum-package-manager.admin.major_updater.description')}</p>
        <div className="PackageManager-updaterControls">
          <Tooltip text={app.translator.trans('flarum-package-manager.admin.major_updater.dry_run_help')}>
            <Button className="Button" icon="fas fa-vial" onclick={this.update.bind(this, true)} disabled={app.packageManager.control.isLoading()}>
              {app.translator.trans('flarum-package-manager.admin.major_updater.dry_run')}
            </Button>
          </Tooltip>
          <Button
            className="Button Button--danger"
            icon="fas fa-play"
            onclick={this.update.bind(this, false)}
            disabled={app.packageManager.control.isLoading()}
          >
            {app.translator.trans('flarum-package-manager.admin.major_updater.update')}
          </Button>
        </div>
        {this.updateState.incompatibleExtensions.length ? (
          <div className="PackageManager-majorUpdate-incompatibleExtensions PackageManager-extensions-grid">
            {this.updateState.incompatibleExtensions.map((extension: string) => (
              <ExtensionItem
                extension={app.data.extensions[extension.replace('flarum-', '').replace('flarum-ext-', '').replace('/', '-')]}
                updates={{}}
                onClickUpdate={null}
                isDanger={true}
              />
            ))}
          </div>
        ) : null}
        {this.updateState.status === 'failure' ? (
          <Alert
            type="error"
            className="PackageManager-majorUpdate-failure"
            dismissible={false}
            controls={[
              <Button
                className="Button Button--text PackageManager-majorUpdate-failure-details"
                icon="fas fa-question-circle"
                onclick={() => app.modal.show(WhyNotModal, { package: 'flarum/core' })}
              >
                {app.translator.trans('flarum-package-manager.admin.major_updater.failure.why')}
              </Button>,
            ]}
          >
            <p className="PackageManager-majorUpdate-failure-desc">
              {app.translator.trans('flarum-package-manager.admin.major_updater.failure.desc')}
            </p>
          </Alert>
        ) : null}
      </div>
    );
  }

  update(dryRun: boolean) {
    app.packageManager.control.majorUpdate({ dryRun });
  }
}
