// Her bir butonun üzerine, içerikte yazan eyleme karşılık gelen satır içi/inline stiller ekleyin.
// Örneğin "Create" butonuna yeşil bir arka plan, "Update" butonuna turuncu bir arka plan, ve "Delete" butonuna kırmızı bir arka plan ekleyin.
// public klasöründe bulunan preview.png görselini inceleyin. Tasarımın beklenen halini göreceksiniz.
// Tailwind CSS kullanarak butonların hover durumunda farklı efektler eklemek için hangi class'ları kullanabilirsiniz?
export default function ButtonVariants() {
  return (
    <div className="container bg-slate-500 h-screen">
      <span className="flex justify-center">
        <button className="ml-2 mt-10 bg-blue-700 hover:bg-blue-800 p-2 text-white rounded">
          Create
        </button>
        <button className="ml-2 mt-10 bg-green-500 hover:bg-green-600 p-2 text-white rounded">
          Update
        </button>
        <button className="ml-2 mt-10 bg-red-600 hover:bg-red-700 p-2 text-white rounded">
          Delete
        </button>
      </span>
    </div>
  );
}
