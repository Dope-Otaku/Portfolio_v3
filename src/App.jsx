import conf from "./creds/conf"


function App() {
  // const noi = () => {
  //   conf.appWriteBucketID
  // }

  return (
    <>
      <h1 className="text-center text-3xl bg-green-500 text-white">{conf.appWriteBucketID || `Hello world!`}</h1>
    </>
  )
}

export default App
