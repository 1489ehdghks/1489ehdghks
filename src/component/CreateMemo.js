import React, { useReducer } from 'react';

function reducer(state, action) {
    return {
        ...state,
        [action.name]: action.value
    };
}

const CreateMemo = () => {
    const [state, dispatch] = useReducer(reducer, {
        name: '',
        nickname: ''
    });
    const { name,} = state;
    const onChange = e => {
        dispatch(e.target);
    };

    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange} />
                
            </div>
            <div>
                <div>
                    <b>할 일 :</b> {name}
                </div>
                <div>
                </div>
            </div>
        </div>
    );
};

export default CreateMemo;