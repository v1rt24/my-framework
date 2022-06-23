export default class Page {
    public fragment: DocumentFragment;

    constructor(containers: any[]) {
        this.fragment = document.createDocumentFragment();
        this.fragment.append(...containers.map(x => x.render()));
    }
}