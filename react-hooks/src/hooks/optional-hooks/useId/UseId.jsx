import EmailForm from "./EmailForm";

export default function UseId() {
    return (
        <div className="main-container">
            <EmailForm />
            <article style={{ marginBlock: '1rem' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptate. Quisquam, voluptate. Quisquam, voluptate.
                Quisquam, voluptate. Quisquam, voluptate. Quisquam, voluptate.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </article>
            <EmailForm />
        </div>
    )
}