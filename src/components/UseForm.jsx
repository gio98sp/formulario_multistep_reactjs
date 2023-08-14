export const UseForm = () => {
  return (
    <div>
      <div className="form-control">
        <label htmlFor="name">Nome:</label>
        <input type="text" name="name" id="name" placeholder="Digite seu nome" required />
      </div>

      <div className="form-control">
        <label htmlFor="name">Email:</label>
        <input type="email" name="email" id="email" placeholder="Digite seu Email" required />
      </div>
    </div>
  );
};
