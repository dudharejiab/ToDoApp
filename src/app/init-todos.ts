export class Init {
    load(){
        if(localStorage.getItem('todo') === null  || localStorage.getItem('todo') === undefined){
            console.log("no toDo found!  Creating.. Hang On...");
            var todos = [
                  {
                    text: "Wash Dishes"
                  },
                  {
                    text: "Pick up Children"
                  },
                  {
                    text: "Laundry"
                  },
                  {
                    text: "Prepare Dinner"
                  },
                  {
                    text: "Clean House"
                  }
                ];

                localStorage.setItem('todos',JSON.stringify(todos));
                return 
        }
        else{
            console.log("Todos Found....."); 
        }
    }
}