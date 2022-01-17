import Link from 'next/link';
import useAuth from '../../data/hook/useAuth';

export default function Avatar() {
  const { usuario } = useAuth();
  return (
    <div>
      <Link href="/profile">
        <img
          className="w-10 h-10 ml-2 rounded-full cursor-pointer"
          src={usuario?.imagemUrl}
          alt="Avatar"
        />
      </Link>
    </div>
  );
}
