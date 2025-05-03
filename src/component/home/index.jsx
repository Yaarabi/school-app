
import "./style.css"
import React from 'react'

const Home = () => {
return (
    <>
    <nav>
        <h1>One Place One School</h1>
        <div className="loginSection">
            <button>Login</button>
            <button>Sign In</button>
        </div>
    </nav>
    <main>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus at iste deserunt praesentium suscipit ducimus adipisci delectus molestias veniam, obcaecati dignissimos modi nulla laudantium dolore? Neque veniam assumenda provident quis.
        </p>
        <section>
            <div>Teacher</div>
            <div>Student</div>
        </section>
    </main>
    </>
)
}

export default Home
