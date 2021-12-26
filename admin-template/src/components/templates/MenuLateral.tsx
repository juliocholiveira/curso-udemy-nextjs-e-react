import { IconHome, IconNotification, IconSetting } from '../icons';
import MenuItem from './MenuItem';

export default function MenuLateral() {
  return (
    <aside>
      <ul>
        <MenuItem url="/" texto="Home" icone={IconHome} />
        <MenuItem url="/setting" texto="Settings" icone={IconSetting} />
        <MenuItem
          url="/notification"
          texto="Notification"
          icone={IconNotification}
        />
      </ul>
    </aside>
  );
}
