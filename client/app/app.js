(function() {

console.log(ng)
	var AppComponent = ng
		.Component({
			selector: 'todo-list',
			template: '<ul>' +
				'<li *ng-for="#todo of todos">' +
				'{{ todo }}' +
                '<button (click)="removeToDo($index)">X</button>' +
				'</li>' +
				'</ul>' +
				'<input #textbox (keyup)="doneTyping($event)">' +
				'<button (click)="addTodo(textbox.value)">Add Todo</button>',
            directives: [ng.NgFor]
		})
		.Class({
			constructor: function() {
                this.todos = ["Eat Breakfast", "Walk Dog", "Breathe"];

        		this.addTodo = function(todo) {
        			this.todos.push(todo);
        		};

                this.removeToDo = function (index) {
                    this.todos.splice(index, 1);
                };

        		this.doneTyping = function($event) {
        			if($event.which === 13) {
        				this.addTodo($event.target.value);
        				$event.target.value = null;
        			}
        		};

			}
		});


	document.addEventListener('DOMContentLoaded', function() {
		ng.bootstrap(AppComponent);
	});

})();
