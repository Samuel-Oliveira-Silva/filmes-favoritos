import { useState } from "react";

const AddMovieForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && image) {
      onAdd({ title, image });
      setTitle("");
      setImage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <input
        type="text"
        placeholder="Título do filme"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 mr-2 rounded"
      />
      <input
        type="text"
        placeholder="URL da imagem"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        className="border p-2 mr-2 rounded"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Adicionar</button>
    </form>
  );
};

export default AddMovieForm;
