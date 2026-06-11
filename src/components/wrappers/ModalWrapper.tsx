export default function ModalWrapper({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <dialog className="fixed bottom-0 sm:bottom-auto sm:top-1/2 left-0 right-0 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 w-full sm:max-w-2xl h-[85vh] sm:h-auto rounded-t-3xl sm:rounded-2xl ...">
            {children}
        </dialog>
    )
}