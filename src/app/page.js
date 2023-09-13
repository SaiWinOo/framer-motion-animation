'use client';
import {useState} from "react";

export default function Home() {

    const [todo, setTodo] = useState([]);



  return (
      <main>
        <div>
            <h2 className={'text-3xl'}>Todo </h2>
        </div>
          <div>
              <input type={'text'} placeholder={'Add Todo'}/>
              <button className={'bg-primary'}>Create</button>
          </div>
      </main>
  )
}
