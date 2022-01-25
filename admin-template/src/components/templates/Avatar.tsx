import Link from 'next/link';
import useAuth from '../../data/hook/useAuth';

export default function Avatar() {
  const { usuario } = useAuth();
  return (
    <div>
      <Link href="/profile">
        {usuario.imagemUrl ? (
          <img
            className="w-10 h-10 ml-2 rounded-full cursor-pointer"
            src={usuario.imagemUrl}
            alt="Avatar"
          />
        ) : (
          <div className="w-10 h-10 ml-2 bg-red-700 rounded-full cursor-pointer flex justify-center items-center">
            <span className="text-lg text-white font-semibold">A</span>
          </div>
        )}
      </Link>
    </div>
  );
}
