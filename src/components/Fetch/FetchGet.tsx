export const FetchGet = async () => {
  try {
    const response = await fetch("https://reqres.in/api/users");

    // Verificando se a resposta foi bem-sucedida
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    // Tentando obter o JSON da resposta
    const data = await response.json();

    console.log(data.data);
  } catch (error) {
    console.error("Fetch error:", error);
  }
};
