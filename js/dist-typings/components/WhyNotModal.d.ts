import Mithril from 'mithril';
import Modal, { IInternalModalAttrs } from 'flarum/common/components/Modal';
export interface WhyNotModalAttrs extends IInternalModalAttrs {
    package: string;
}
export default class WhyNotModal<Attrs extends WhyNotModalAttrs = WhyNotModalAttrs> extends Modal<Attrs> {
    loading: boolean;
    whyNot: string | null;
    className(): string;
    title(): any;
    oncreate(vnode: Mithril.VnodeDOM<Attrs, this>): void;
    content(): JSX.Element;
    requestWhyNot(): void;
}
