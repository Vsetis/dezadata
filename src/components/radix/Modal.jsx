import * as Dialog from "@radix-ui/react-dialog";

const Modal = ({ children, triggerIcon, closeIcon, open, isOpen }) => {
  return (
    <Dialog.Root open={open} onOpenChange={isOpen}>
      <Dialog.Trigger asChild>{triggerIcon}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/10" />
        <Dialog.Content className="bg-zinc-800 fixed border border-white/20 top-1/3 left-1/2 translate-x-[-50%] translate-y-[-45%] p-8 w-[90vw] max-w-md max-h-[85vh] rounded">
          <div className="flex flex-col text-white/80">
            <div className="flex justify-between">
              <Dialog.Title className="font-semibold text-xl mb-8">
                Upravte položku
              </Dialog.Title>
              <Dialog.Close asChild className="h-max w-max">
                {closeIcon}
              </Dialog.Close>
            </div>
            <div>{children}</div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
