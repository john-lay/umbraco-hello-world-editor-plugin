declare namespace HelloWorldEditor {

    interface IUmbracoControl {
        editor: {
            config: IHelloWorldEditorConfig;
        };
        value?: any;
        values?: IHelloWorldEditorConfig;
    }

    interface IHelloWorldEditorConfig {
        Title: string;
        MyArray: IMyArray;
    }

    interface IMyArray {
        key: string;
        value: string;
    }
}
