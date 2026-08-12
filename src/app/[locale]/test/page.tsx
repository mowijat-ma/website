import { LocalApiClient } from "@/lib/local_apiclient";
import React from "react";

export default async function Page() {

  // const response = await fetch('http://localhost:3000/api/hello');
  // 
  // const data = await response.json();

  // console.log(data.message);

  const {res}= await LocalApiClient('posts', {
    method: 'GET',
  });
  
  return (
    <main>
      <h1>Welcome to MOWIJAT</h1>
      <p>This is the default page.</p>
      {res && <p>{JSON.stringify(await res)}</p>}
    </main>
  );
}
