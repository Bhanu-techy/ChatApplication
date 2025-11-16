
function TableResponse({response}) {
  return (
    <div>
        <table className={`bg-white border border-gray-300 ${response.length===0 ?"hidden" :""}`}>
            <thead>
                <tr className="bg-gray-100">
                <th className="py-2 px-4 border">Feature</th>
                <th className="py-2 px-4 border">Description</th>
                <th className='py-2 px-4 border'>Example</th>
                </tr>
            </thead>
        <tbody>
          {response.map(each=>(
            <tr key={each.id}>
            <td className="py-2 px-4 border">{each.Feature}</td>
            <td className="py-2 px-4 border">{each.Description}</td>
            <td className="py-2 px-4 border">{each.Example}</td>
            </tr>
          ))}
        </tbody>
        </table>
    </div>
  )
}

export default TableResponse