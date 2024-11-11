import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App: React.FC = () => {
  const [message, setMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Realizar la solicitud al backend cuando el componente se monta
    axios.get('http://localhost:8080/api/test')
      .then(response => {
        setMessage(response.data.message); // Guardar el mensaje de respuesta
        setLoading(false); // Termina la carga
      })
      .catch(error => {
        setError('No se pudo conectar con el backend.'); // Manejar errores
        setLoading(false); // Termina la carga en caso de error también
      });
  }, []);

  if (loading) {
    return <p>Cargando...</p>;
  }

  return (
    <div>
      <h1>Conexión con el Backend</h1>
      {error ? (
        <p style={{ color: 'red' }}>{error}</p> // Muestra el error si existe
      ) : (
        <p>{message}</p> // Muestra el mensaje si la conexión es exitosa
      )}
    </div>
  );
};

export default App;
