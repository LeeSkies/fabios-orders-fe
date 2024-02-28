type Props = {
  products: string;
};

export const ProductsTable = ({ products }: Props) => {
  return products && products != "" ? (
    <table className="border-separate border-spacing-6">
      <tbody>
        <tr>
          {products.split(",").map((product) => (
            <p>{product.trim()}</p>
          ))}
        </tr>
      </tbody>
    </table>
  ) : (
    <h1 className="p-8 font-bold">לא נמצאו פריטים</h1>
  );
};
