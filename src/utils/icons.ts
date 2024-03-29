import { ToastOptions } from 'react-toastify';

export const successIcons = ['🤗', '😀', '🥰', '😎', '🙏', '👚','👘', '🧺', '👖', '👛', '👗', '👜', '👓', '🧦', '🎒', '🎩', '🩳', '👔', '🧵', '🎉', '🥳', '🎇', '✨', '🎊', '🔥', '🧨', '👑', '🤑', '💸', '🙌', '🎁'];

export const failureIcons = ['😥', '😔', '😟', '😓', '😢', '😭', '😞', '😪', '☹️', '😕', '😧', '😩', '😰', '😨', '😤', '😡'];

export const infoIcons = ['🤔', '🧐', '📝', '👍', '😤', '😐', '😑', '😶', '🤠', '🥱', '👋', '👌', '✌️', '🤙', '🤝', '👀'];

export const toastOptions: ToastOptions =  {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    style: {
        fontSize: '16px',
        fontWeight: 'normal',
    }
}