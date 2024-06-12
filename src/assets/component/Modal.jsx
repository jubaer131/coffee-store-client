
import { Button, Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import { useState } from 'react'

export default function MyModal() {
    let [isOpen, setIsOpen] = useState(true)

    function open() {
        setIsOpen(true)
    }

    function close() {
        setIsOpen(false)
    }

    return (
        <>
            <Button
                onClick={open}
                className="rounded-md bg-black/20 py-2 px-4 text-sm font-medium text-white focus:outline-none data-[hover]:bg-black/30 data-[focus]:outline-1 data-[focus]:outline-white"
            >
                Open dialog
            </Button>

            <Transition appear show={isOpen}>
                <Dialog as="div" className="relative z-10 focus:outline-none" onClose={close}>
                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4">
                            <TransitionChild
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 transform-[scale(95%)]"
                                enterTo="opacity-100 transform-[scale(100%)]"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 transform-[scale(100%)]"
                                leaveTo="opacity-0 transform-[scale(95%)]"
                            >
                                <DialogPanel className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl">
                                    <DialogTitle as="h3" className="text-base/7 font-medium text-white">
                                        Payment successful
                                    </DialogTitle>
                                    <p className="mt-2 text-sm/6 text-white/50">
                                        Your payment has been successfully submitted. We’ve sent you an email with all of the details of
                                        your order.
                                    </p>
                                    <div className="mt-4">
                                        <Button
                                            className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
                                            onClick={close}
                                        >
                                            Got it, thanks!
                                        </Button>
                                    </div>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}



<div className="mt-6">
    {/* The button to open modal */}
    <label htmlFor="my_modal_6" className="btn">open modal</label>

    {/* Put this part before </body> tag */}
    <input type="checkbox" id="my_modal_6" className="modal-toggle" />
    <div className="modal" role="dialog">

        <div className="modal-box">
            <h3 className="font-bold text-lg text-center">registations </h3>
            {/* start */}
            <form onSubmit={handlesubmit} className="space-y-4 ">
                <div>
                    <label className="block mb-2 font-medium">Camp Name</label>
                    <input type="text" readOnly className="w-full p-2 border rounded" defaultValue={campdetails.campName} />
                </div>
                <div>
                    <label className="block mb-2 font-medium">Camp Fees</label>
                    <input type="text" readOnly className="w-full p-2 border rounded" defaultValue={campdetails.campFees} />
                </div>
                <div>
                    <label className="block mb-2 font-medium">Location</label>
                    <input type="text" readOnly className="w-full p-2 border rounded" defaultValue={campdetails.location} />
                </div>
                <div>
                    <label className="block mb-2 font-medium">Healthcare Professional</label>
                    <input type="text" readOnly className="w-full p-2 border rounded" defaultValue={campdetails.healthcareProfessional} />
                </div>

                <div>
                    <label className="block mb-2 font-medium">Age</label>
                    <input
                        type="number"
                        name="age"

                        required
                        className="w-full p-2 border rounded"
                    />
                </div>
                <div>
                    <label className="block mb-2 font-medium">Phone Number</label>
                    <input
                        type="number"
                        name="phoneNumber"

                        required
                        className="w-full p-2 border rounded"
                    />
                </div>
                <div>
                    <label className="block mb-2 font-medium">Gender</label>
                    <select
                        name="gender"
                        value={gender} // Set the 'value' attribute to the selected gender state
                        onChange={handleChange} // Call the handleChange function when the selection changes
                        required
                        className="w-full p-2 border rounded"
                    >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <div>
                    <label className="block mb-2 font-medium">Emergency Contact </label>
                    <input
                        type="number"
                        name="emergencyContact"

                        required
                        className="w-full p-2 border rounded"
                    />
                </div>
                <button type="submit" className="btn my_modal_6 btn-primary w-full">Join Camp</button>
            </form>



            {/* end*/}

            <div className="w-full mt-4">

                <label htmlFor="my_modal_6" className="btn w-full">cancel</label>
            </div>
        </div>
    </div>
</div>