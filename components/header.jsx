function Header() {
  return <div className='container h-30 border-solid border-4 border-gray-600 max-w-full '>
    <img src='./img/Deelly Logo.png' className="img p-9"></img>

      <div class="w-full max-w-xs">
      <select class=" rounded-full mt-1 block w-55 pl-3 pr-10 py-2 text-base border-2 border-green-700 focus:outline-none focus:border-green-700 sm:text-lg "
      >
        <option>Pakistan</option>
        <option>Canada</option>
        <option>India</option>
        <option>United state</option>
      </select>
    </div>
  </div>

}
export default Header;