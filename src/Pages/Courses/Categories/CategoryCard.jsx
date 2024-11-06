


const CategoryCard = ({label, icon:Icon}) => {


const handleClick = ()=> {
    const Courset = label;

  
 
}


    return (
        <div onClick={handleClick} className="flex flex-col justify-center items-center gap-2 p-3 
        rounded-md hover:text-red-700 transition  cursor-pointer  text-2xl border-b-2">
            <Icon size={26} />
            <div className="text-sm font-medium">
                {label}
            </div>
          
    
        </div>
    );
};

export default CategoryCard;