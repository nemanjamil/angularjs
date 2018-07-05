<!DOCTYPE html>
<html lang="en" ng-app="angularmodulename">
<head>
    <meta charset="UTF-8">
    <title>AngularJS</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="css.css" rel="stylesheet" type="text/css">
    <link href="node_modules/angular-material/angular-material.min.css" rel="stylesheet" type="text/css">
    <base href="/">
    <meta http-equiv='cache-control' content='no-cache'>
    <meta http-equiv='expires' content='0'>
    <meta http-equiv='pragma' content='no-cache'>
</head>

<body>


<div id="page" ng-controller="mainController"  ng-cloak=""> <!--ng-controller="mainController"-->


    <?php
    require("pages/aside.php");
    //require("pages/section.php");
    ?>
    <section class="main">

        <section layout="row" layout-sm="column" layout-align="end center" layout-wrap>
            <div layout="row" layout-align="start center" flex>
                <div></div>
                <h1 class="fs30">{{$route.current.titlecontroller}} <span>{{status}}</span></h1>
                <span flex></span>
            </div>
            <div ng-if="$route.current.titlecontroller == 'Trash'">
                <md-button class="butborradred md-raised" ng-click="allTrash()">Trash</md-button>
            </div>
            <div ng-if="$route.current.titlecontroller != 'Trash'">
                <md-button class="md-raised butborrad" ng-click="showAdvanced($event)">Add New Note</md-button>
            </div>

        </section>

        <div ng-view></div>


    </section>


</div>

<script src="node_modules/angular/angular.min.js"></script>
<script src="node_modules/angular-route/angular-route.min.js"></script>
<script src="node_modules/angular-animate/angular-animate.min.js"></script>
<script src="node_modules/angular-aria/angular-aria.min.js"></script>
<script src="node_modules/angular-messages/angular-messages.min.js"></script>
<script src="node_modules/angular-material/angular-material.min.js"></script>
<script src="node_modules/angulargrid/angulargrid.min.js"></script>

<!--In production join all js-->
<script src="script.js"></script>
<script src="controller.js"></script>
<script src="controllers/notesController.js"></script>
<script src="controllers/imagesController.js"></script>
<script src="controllers/linksController.js"></script>
<script src="controllers/trashController.js"></script>

</body>
</html>



