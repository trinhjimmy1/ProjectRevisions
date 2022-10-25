import React, {useState} from 'react';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [inputFirstname, setInputFirstname] = useState('');
    const [inputAge, setInputAge] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        setUsers([...users, {
            firstname: inputFirstname,
            age: inputAge
        }]);
        setInputFirstname("");
        setInputAge("");
    }

    const handleClick = index => {
        const newState = [...users];
        newState.splice(index, 1);
        setUsers(newState);
    }

    return(
        <div>
            <h1>Users</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={e => setInputFirstname(e.target.value)}
                    value={inputFirstname}
                    placeholder="Prenom"
                />
                <input
                    type="text"
                    onChange={e => setInputAge(e.target.value)}
                    value={inputAge}
                    placeholder="Age"
                />
                <button>Ajouter un user</button>
            </form>

            {
                users.map((user, index) => (
                    <div key={index}>
                        <h5>{user.firstname} {user.age}</h5>
                        <button onClick={() => {handleClick(index)}}>X</button>
                    </div>
                ))
            }
        </div>
    );
/*    const [firstnames, setFirstnames] = useState([]);
    const [ages, setAges] = useState([]);
    const [inputFirstname, setInputFirstname] = useState('');
    const [inputAge, setInputAge] = useState('');
    const [isTrue, setIsTrue] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setAges([...ages, inputAge]);
        setInputAge("");

        setFirstnames([...firstnames, inputFirstname]);
        setInputFirstname("");
    };

    const handleRemove = (index, setState) => {
        setState(item => item.filter((value, i) => i !== index ) );
    }



    const handleEdit = (setState, index, input) => {
        setIsTrue(true);
     /!*   state.map((item, i ) => {
           if (i === index) {
               return setState([...item, input])
           }  else {
               return item;
           }
        });*!/
        setState(item =>
            item.map((elem, i) => {
                if (i === index) {
                    return [...elem, input];
                }

                return elem;
            }),
        );
    };

    const removeAll = () => {
        setFirstnames([]);
        setAges([]);
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>firstname</label>
                <input onChange={e => setInputFirstname(e.target.value)} value={inputFirstname} type="text"/>

                <label>age</label>
                <input onChange={e => setInputAge(e.target.value)} value={inputAge} type="text"/>
                <button>ajouter</button>
                <button onClick={() => removeAll()}>Tout supprimer</button>
            </form>

            <div>
                <h1>Firstname</h1>
                {
                    firstnames.map((firstname, index) => (
                        <li key={index}>
                            {firstname}

                            <button onClick={() => handleEdit(setFirstnames,index, inputFirstname)}>Edit</button>
                            { isTrue &&
                                <input onChange={e => setInputFirstname(e.target.value)} value={inputFirstname} type="text"/>
                            }
                            <button onClick={() => handleRemove(index, setFirstnames)}>Supprimer</button>
                        </li>
                    ))
                }
            </div>

            <div>
                <h1>Age</h1>
                {
                    ages.map((ages, index) => (
                        <li key={index}>
                            {ages}
                            <button onClick={() => handleEdit(ages, setAges)}>Edit</button>
                            <button onClick={() => handleRemove(index, setAges)}>Supprimer</button>
                        </li>
                    ))
                }
            </div>

        </div>
    );*/



};

export default Users;