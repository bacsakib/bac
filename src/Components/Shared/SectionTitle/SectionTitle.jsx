

const SectionTitle = ({title, subtitle}) => {
    return (
        <div>
             <div className="mb-4">
                <h1 className="text-5xl font-bold mb-4 text-center">{title} </h1>
                <p className="text-center text-xl mt-2">{subtitle}</p>
            </div>
        </div>
    );
};

export default SectionTitle;