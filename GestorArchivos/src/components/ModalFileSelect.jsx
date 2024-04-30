
import { useEffect, useState } from 'react';

export default function ModalFileSelect({ selectedFile, openModal }) {

	const [isOpen, setIsOpen] = useState(false);
	const [fileContent, setFileContent] = useState(null);

  const closeModal = () => {
    setIsOpen(false);
  }

	useEffect(() => {

    if (selectedFile) {
      
      const reader = new FileReader();

      reader.onload = (event) => {
        setFileContent(event.target.result);
      };

      reader.readAsDataURL(selectedFile);

    }

  }, [selectedFile]);

  useEffect(() => {
    if (openModal) {
      setIsOpen(true);
    }
  }, [openModal]);

	return (
		<>
			{isOpen && (
				<div className="fixed inset-0 bg-black bg-opacity-10 backdrop-blur-sm flex justify-center items-center">
					<div className="max-w-sm rounded overflow-hidden shadow-lg">
						<img className="w-64 h-auto" src={ fileContent } alt={ selectedFile.name } />
						<div className="px-6 py-4">

							{/* input text con el nombre de; archivo */}
							<div className="mb-4">
								<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
									Nombre del archivo
								</label>
								<input
									className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									id="username"
									type="text"
									placeholder="Nombre del archivo"
									value={ selectedFile.name }
									onChange={(e) => {
										// Actualiza el nombre del archivo en el estado
										setSelectedFile({ ...selectedFile, name: e.target.value });
									  }}
								/>
							</div>

							{/* 2 botones uno apara guardar y otro para cerrar el modal */}

							<div className="">
								<button
									className="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
									type="button"
								>
									Guardar
								</button>
								<button
									className="m-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
									onClick={ closeModal }
									type="button"
								>
									Cerrar
								</button>
							</div>

						</div>
							
					</div>
				</div>
			)}
		</>
	);
}
