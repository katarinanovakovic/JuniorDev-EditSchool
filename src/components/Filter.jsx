export default function Filter({teme, odabranaTema, filtriraj, handleThemeChange}){


  return (
        <div className="filter">
      <div className="filter-section">
        <div>
        {teme.map((tema) => (
        <label key={tema.id}>
          <input
            type="checkbox"
            checked={tema.id === odabranaTema?.id}
            onChange={() => handleThemeChange(tema)}
          />
          {tema.ime}
        </label>
      ))}
            </div>
      </div>
    </div>
    )
}