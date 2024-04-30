import { useNavigate } from "react-router-dom"

export const SignUpPage = () => {

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login')
  }

  return (
    <div>
      <div>
        <nav className="bg-[#C53678] text-white flex justify-between items-center">
          <div className="flex-1 px-2 lg:flex-none">
            <a className="text-lg font-bold flex items-center space-x-3 rtl:space-x-reverse">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">FileSync</span>
            </a>
          </div>

          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse p-2">
            <button type="button"
              onClick={handleLogin}
              className="py-2 bg-[#ff5841] text-white px-8 hover:bg-[#F04D35] font-bold uppercase rounded-md">Iniciar Sesión</button>
          </div>

        </nav>
      </div>

      <div className="h-full antialiased container flex justify-center items-center pb-5 p-10">
        <div className="flex bg-[#F2EFEF] items-center rounded-lg p-7">
          <img src="/img/sitio.png" alt="" className="w-72 h-full float-left mr-10" />
          <div className="w-1/2 container flex justify-center items-center py-2">
            <form id="formSignUp">
              <div className="flex flex-col p-10 space-y-6 border-[#F2EFEF]">
                <div className="flex flex-col space-y-1 w-72 border-b-2 border-[#ff5841]">
                  <input type="text"
                    className="appearance-none bg-transparent border-none w-full
                    text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    placeholder="Nombre"
                  />
                </div>
                <div className="flex flex-col space-y-1 w-72 border-b-2 border-[#ff5841]">
                  <input type="text"
                    className="appearance-none bg-transparent border-none w-full
                    text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    placeholder="Apellido"
                  />
                </div>
                <div className="flex flex-col space-y-1 w-72 border-b-2 border-[#ff5841]">
                  <input type="email"
                    className="appearance-none bg-transparent border-none w-full
                    text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    placeholder="Correo Electrónico"
                  />
                </div>
                <div className="flex flex-col space-y-1 w-72 border-b-2 border-[#ff5841]">
                  <input type="password"
                    className="appearance-none bg-transparent border-none w-full
                    text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    placeholder="Contraseña"
                  />
                </div>
                <div className="flex flex-col space-y-1 w-72 border-b-2 border-[#ff5841]">
                  <input type="password"
                    className="appearance-none bg-transparent border-none w-full
                    text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    placeholder="Confirmación de Contraseña"
                  />
                </div>
                <button type="submint"
                  className="py-2 bg-[#ff5841] text-white px-8 hover:bg-[#F04D35] font-bold uppercase rounded-md">Registrar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}
