import { useId } from 'react';

export default function EmailForm() {
    // useId is a hook that generates a unique ID for each instance of the component
    // This is useful when you have multiple instances of a component and each needs a unique ID
    // For example, in this case, we have two EmailForm components, and each needs unique IDs for its input fields
    const id = useId();

    return (
        <>
            {/* This code is not correct, when clicking on the label the right input is not focused */}
            {/* <div>
                <label htmlFor= 'email'>Email</label>
                <input id='email' type="email" />
            </div> */}
            <div className='h-container'>
                {/* Use the generated ID to create unique IDs for the input fields */}
                <label htmlFor={`${id}-email`}>Email</label>
                <input id={`${id}-email`} type="email" />
                <br />

                <label htmlFor={`${id}-name`}>Name</label>
                <input id={`${id}-email`} type="text" />

            </div>
        </>
    )
}

//useId is a useful hook when you need to generate unique IDs in your components, /especially for form inputs and labels. 
//It's better than using Math.random() because it ensures the ID is unique across the entire application and generates the same ID on both the client and the server.