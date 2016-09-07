module HelloWorldEditor {
    "use strict";

    export interface IHelloWorldEditorScope extends ng.IScope {
        control: IUmbracoControl;
        showModalEditor(): void;
    }

    // DEBUG
    //export var HelloWorldEditorScope;

    export class HelloWorldEditorController {
        static $inject = ["$scope", "dialogService"];

        constructor($scope: IHelloWorldEditorScope, dialogService: any) {

            //HelloWorldEditorScope = $scope;

            // populate existing values for HelloWorld widget
            if (typeof ($scope.control.values) === "undefined" || $scope.control.values == null) {
                $scope.control.values = <any>{};
                $scope.control.values.Title = $scope.control.editor.config.Title;
                $scope.control.values.MyArray = $scope.control.editor.config.MyArray;
            }

            $scope.showModalEditor = () => {
                var newScope = $scope.$new();

                dialogService.open({
                    template: '/app_plugins/HelloWorldEditorPlugin/Editors/HelloWorlddialogeditor.html',
                    scope: newScope,
                    controller: "HelloWorldDialogController",
                    show: true
                });
            }
        }
    }
}

angular.module("umbraco").controller("HelloWorldEditorController", HelloWorldEditor.HelloWorldEditorController);
