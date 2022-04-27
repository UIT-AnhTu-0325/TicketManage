import swal from "sweetalert";

export const callSwal = (title, text, icon, button, buttons, dangerMode) => {
  return swal({
    title: title,
    text: text,
    icon: icon,
    button: button,
    buttons: buttons,
    dangerMode: dangerMode,
  });
};

export const simpleSwal = (title, icon) => {
  swal({
    title: title,
    icon: icon,
  });
};
