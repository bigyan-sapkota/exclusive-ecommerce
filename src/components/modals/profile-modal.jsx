import Modal from "../modal";
import { FaPhoneAlt, FaUser, FaUserCheck } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Button from "../button";

const ProfileModal = ({
  user,
  isProfileModalOpen,
  onClose,
  updateProfileClickHandler,
}) => {
  return (
    <Modal title="User Details" isOpen={isProfileModalOpen} onClose={onClose}>
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <FaUser /> Name: {user?.name}
        </div>
        <div className="flex items-center gap-2">
          <IoMdMail />
          Email: {user?.email}
        </div>
        {user?.phone && (
          <div className="flex items-center gap-2">
            <FaPhoneAlt />
            Phone: +977-{user?.phone}
          </div>
        )}
        <div className="flex items-center gap-2">
          <FaUserCheck />
          Role: <span className="capitalize">{user?.role}</span>
        </div>
      </div>

      <div className="mt-4">
        <Button
          text="Update Profile"
          buttonClickHandler={updateProfileClickHandler}
        />
      </div>
    </Modal>
  );
};

export default ProfileModal;
