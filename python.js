!function(){

    function create_exercise(e){
        e.className += " datacamp-exercise";
        if ("height" in e.dataset && "auto" !==e.dataset.height)
        {
            var t=Math.round(e.dataset.height);
            if(isNaN(t)) { console.log("Invalid height attribute.");}
            else if (t>=150) {e.style.height=t+"px";var a="height:"+t+"px;";e.setAttribute("style",a);}
            else {console.log("The height attribute should be >= 150.");}
        }
        else {
            e.style.height = "300px";
        }
        e.innerHTML += `<div ng-controller="NormalExerciseController"><div class="dcl-exercise-area" resize-layout=""><div class="dcl-left-pane" ng-class="{\'dcl-mini\': useMiniLayout}"><ul class="dcl-content--tab"><li><a href="" ng-click="activateLeftTab(\'usercode\')" ng-class="{\'dcl-active\': isActiveLeftTab(\'usercode\')}">script.{{backendConfig.extension}}</a></li><li ng-show="solutionTabShown"><a class="dcl-animation--flash" href="" ng-click="activateLeftTab(\'solution\')" ng-class="{\'dcl-active\': isActiveLeftTab(\'solution\')}">solution.{{backendConfig.extension}}</a></li><li><a href="" ng-show="useMiniLayout" ng-click="activateLeftTab(\'console\')" ng-class="{\'dcl-active\': isActiveLeftTab(\'console\')}">{{backendConfig.console}}</a></li><li><a href="" ng-show="useMiniLayout && plotTabShown" ng-click="activateLeftTab(\'plots\')" ng-class="{\'dcl-active\': isActiveLeftTab(\'plots\')}">Plots</a></li></ul><div class="dcl-content--tab-body"><div code-editor="" control="editor" ng-show="isActiveLeftTab(\'usercode\') || isActiveLeftTab(\'solution\')" ng-model="userCode"></div><div ng-show="isActiveLeftTab(\'console\')" class="dcl-console-target dcl-console-mini-target"></div><div ng-show="isActiveLeftTab(\'plots\')" class="dcl-plots-mini-target"></div><div growl="" ng-show="!isActiveLeftTab(\'plots\')" inline="true" limit-messages="1" sct-feedback="" class="sct-feedback-container"></div></div></div><div ng-show="!useMiniLayout" class="dcl-right-pane clearfix"><ul class="dcl-content--tab"><li><a href="" ng-click="activateRightTab(\'console\')" ng-class="{\'dcl-active\': isActiveRightTab(\'console\')}">{{backendConfig.console}}</a></li><li><a ng-show="plotTabShown" href="" ng-click="activateRightTab(\'plots\')" ng-class="{\'dcl-active\': isActiveRightTab(\'plots\')}">Plots</a></li></ul><div class="dcl-content--tab-body"><div ng-show="isActiveRightTab(\'console\')" control="console" class="dcl-console-target dcl-console-full-target"><console class="dcl-console"></console></div><div ng-show="isActiveRightTab(\'plots\')" class="dcl-plots-full-target"><plots-container class="dcl-plots-container"></plots-container></div></div></div></div><action-panel exercise="exercise"></action-panel></div>`;
    }
    function load_excercise(){
        var a=document.querySelectorAll("[data-datacamp-exercise]");
        for(var i=0;i<a.length;i++){
            !function(e){
                var i = a[e];
                (" "+i.className+" ").indexOf(" datacamp-exercise ")>-1 || create_exercise(i)
            }(i);
        }

        var t = document.createElement("script");
        t.type = "text/javascript";
        t.src="https://cdn.datacamp.com/dcl/script-8fa338a2dc.js";
        t.charset="utf-8";
        l("body",t);
    }

    function load_css(){
        var e=document.createElement("style");
        e.type="text/css";
        l("head",e);
        var t='div.datacamp-exercise {margin: 0 0 10px 0;  border: 1px solid #d5eaef;  background: none;  position: relative;  min-height: 150px;  color: black;  box-shadow: none;}div  [data-datacamp-exercise] {margin: 0;  border: 1px solid #d5eaef;  background: #fff;  background-size: auto 80px !important;  position: relative;  min-height: 300px;  color: transparent;  box-shadow: none;}div[data-datacamp-exercise] > code,div[data-datacamp-exercise] > div,div[data-datacamp-exercise] > p {display: none;}';
        e.styleSheet ? e.styleSheet.cssText=t : e.innerHTML=t
    }
    function l(e,t){
        document.getElementsByTagName(e)[0].appendChild(t)
    }

    load_css()
    document.addEventListener("DOMContentLoaded",load_excercise)
}();