interface PricingOption {
  id: number;
  name: string;
  description: string;
  price: string;
  buttonText: string;
  buttonVariant: string;
}

const PricingField: React.FC<{ data: PricingOption }> = ({ data }) => {
  return (
    <div>
      <h1>
        {data.name} {data.price}
      </h1>
      <h2>{data.description}</h2>
    </div>
  );
};

export default PricingField;
