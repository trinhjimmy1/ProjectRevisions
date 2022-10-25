import React, {useState} from 'react';

const Home = () => {
    const [tasks, setTasks] = useState([]);
    const [inputTask, setInputTask] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        // Quand on manipule un tableau state on copie le tableau et on manipule la copie
        setTasks([...tasks, inputTask]);
        setInputTask("");
        //autre syntax
        /*
        * const newState = [...tasks];
        * newState.push(inputTask);
        * setTasks(newState)
        *  */
    }

    const handleRemove = index => {
        setTasks(item => item.filter((value, i) => i !== index ) )
    }

    const alphabeticalSort = (tasks) => {
         const newArr = [...tasks];
         newArr.sort();
         setTasks(newArr);
    }
    return (
        <>
            <h1>Etats</h1>
            <form onSubmit={handleSubmit}>
                <input onChange={e => setInputTask(e.target.value)} value={inputTask} type="text"/>
                <button type="submit">Ajouter une tâche</button>
            </form>
            <button onClick={() => alphabeticalSort(tasks)}>Trier par ordre alphabétique</button>

            <ul>
                {
                    tasks.map((task, index) => (
                        <li key={index}>
                            {task}
                            <button onClick={() => handleRemove(index)}>Supprimer</button>
                        </li>
                    ))
                }
            </ul>
        </>
    );
};

export default Home;