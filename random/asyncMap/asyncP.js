var asyncMap = function(tasks, cb){
    var completedTasks = {
        results:[],
        number: 0
    }
    var enterResult = function(index){
        return function(data){
            completedTasks.results[index] = data;
            completedTasks.number++;
            if (completedTasks.number === tasks.length){
                cb(completedTasks.results);
            }
        }
    }

    tasks.forEach(function(singleTask, index){
        singleTask(enterResult(index));
    });
}

var asyncPromises = function(tasks, cb){
    var taskPromises = tasks.map(function(singleTask, index){
        var newTask = new Promise()
        return newTask;
    });
    Promise.all([tasks])
            .then(function(values){
                cb(values);
            });
}