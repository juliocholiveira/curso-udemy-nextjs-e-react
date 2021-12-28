import { IconHome, IconLogout, IconNotification, IconSetting } from '../icons';
import Logo from './Logo';
import MenuItem from './MenuItem';

export default function MenuLateral() {
  return (
    <aside className="flex flex-col">
      <div
        className={`flex flex-col justify-center items-center bg-gradient-to-r from-indigo-500
          to-purple-800 w-20 h-20 gra`}
      >
        <Logo />
      </div>
      <ul className={`flex-grow`}>
        <MenuItem url="/" texto="Home" icone={IconHome} />
        <MenuItem url="/setting" texto="Settings" icone={IconSetting} />
        <MenuItem
          url="/notification"
          texto="Notification"
          icone={IconNotification}
        />
      </ul>
      <ul>
        <MenuItem
          className={`text-red-500 hover:bg-red-300 hover:text-white`}
          texto="Sair"
          icone={IconLogout}
          onClick={() => console.log('aqui...')}
        />
      </ul>
    </aside>
  );
}
