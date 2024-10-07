const Header = () => {
  return (
    <>
      <h2>Env Variables</h2>
      <p>App Version: {import.meta.env.VITE_APP_VERSION}</p>
      <p>URL: {import.meta.env.VITE_API_URL}</p>
      <p>Mode: {import.meta.env.MODE}</p>
      <p>is Development? {import.meta.env.DEV.toString()}</p>
      <p>is Production? {import.meta.env.PROD.toString()}</p>
      <p>is Server Side Render? {import.meta.env.SSR.toString()}</p>
      <p>Vite String Example: {import.meta.env.VITE_STRING_EXAMPLE}</p>
      <p>String Example: {import.meta.env.STRING_EXAMPLE}</p>
    </>
  )
}

export default Header
