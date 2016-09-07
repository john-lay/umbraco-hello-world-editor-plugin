module HelloWorldEditor {
    "use strict";

    export interface IHelloWorldDialogScope extends ng.IScope {
        control: IUmbracoControl;
        vm: IHelloWorldEditorConfig;

        close(): void;
        save(): void;
    }

    // DEBUG
    //export var HelloWorldDialogScope;

    export class HelloWorldDialogController {
        static $inject = ["$scope", "dialogService"];

        constructor($scope: IHelloWorldDialogScope, dialogService: any) {

            //HelloWorldDialogScope = $scope;

            // grab model content from control values
            $scope.vm = { Title: $scope.control.values.Title, MyArray: null };

            $scope.close = () => {
                dialogService.closeAll();
            }

            $scope.save = () => {
                $scope.control.values.Title = $scope.vm.Title;
                //Close dialog
                $scope.close();
            };
        }
    }
}

angular.module("umbraco").controller("HelloWorldDialogController", HelloWorldEditor.HelloWorldDialogController);
