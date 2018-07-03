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
</head>

<body>


<div id="page" ng-controller="mainController" ng-cloak="">

    <?php
    require("pages/aside.php");
    require("pages/section.php");
    ?>

</div>

<script src="node_modules/angular/angular.min.js"></script>
<script src="node_modules/angular-route/angular-route.min.js"></script>
<script src="node_modules/angular-animate/angular-animate.min.js"></script>
<script src="node_modules/angular-aria/angular-aria.min.js"></script>
<script src="node_modules/angular-messages/angular-messages.min.js"></script>
<script src="node_modules/angular-material/angular-material.min.js"></script>

<script src="script.js"></script>
<script src="controller.js"></script>

</body>
</html>



