import { auth } from "../_lib/auth";
import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service";
import DateSelector from "./DateSelector";
import LoginMessage from "./LoginMessage";
import ReservationForm from "./ReservationForm";

export default async function Reservation({ cabinId, cabin }) {
  const session = await auth();
  const [settings, cabinDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabinId),
  ]);
  return (
    <div className="flex border border-primary-800">
      <DateSelector settings={settings} cabinDates={cabinDates} cabin={cabin} />
      {session?.user ? (
        <ReservationForm cabin={cabin} user={session.user} />
      ) : (
        <LoginMessage />
      )}
    </div>
  );
}
