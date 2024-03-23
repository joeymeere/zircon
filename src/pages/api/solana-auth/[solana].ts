import { app } from "@/firebase";
import { FirebaseAdapter } from "@/lib/auth/firebaseAdapter";
import { SolanaNextAuth } from "@/lib/auth/solanaNextAuth";

export default SolanaNextAuth({ adapter: FirebaseAdapter(app) });