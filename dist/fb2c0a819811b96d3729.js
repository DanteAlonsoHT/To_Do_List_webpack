import{Methods}from"./checkbox.js";import style from"./style.css";var indexList,containerTasks=document.getElementById("container-tasks"),buttonAddTask=document.getElementById("button-add-task"),methods=new Methods;buttonAddTask.onclick=function(){methods.addTask()},methods.showTasks();var list=methods.getLocalStorage();containerTasks.addEventListener("click",(function(t){if(null!==t.target&&"NaN"!==t.target&&""!==t.target&&"INPUT"===t.target.tagName){var e=t.target.id.replace("complete-checkbox-",""),o=document.getElementById("button-remove-".concat(e)),s=document.getElementById("button-move-".concat(e)),n=document.getElementById("task-name-".concat(e));indexList=parseInt(e,10),list&&("false"===list[indexList].completed?(list[indexList].completed="true",o.style.display="block",s.style.display="none",n.style.textDecoration="line-through"):(list[indexList].completed="false",o.style.display="none",s.style.display="block",n.style.textDecoration="none"),methods.updateLocalStorage(list))}}),!1);