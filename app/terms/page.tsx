'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowUp,
  Globe2,
  Menu,
  ShieldCheck,
  X,
} from 'lucide-react'

type Language = 'EL' | 'EN'

export default function TermsPage() {
  const [language, setLanguage] = useState<Language>('EL')
  const [menuOpen, setMenuOpen] = useState(false)

  const greek = language === 'EL'

  const closeMenu = () => setMenuOpen(false)

  const copy = greek
    ? {
        retail: 'ΛΙΑΝΙΚΗ',
        wholesale: 'ΧΟΝΔΡΙΚΗ',
        termsNav: 'ΟΡΟΙ',
        privacyNav: 'ΑΠΟΡΡΗΤΟ',

        label: 'VYRO · ΝΟΜΙΚΑ',
        title: 'Όροι & Προϋποθέσεις',
        intro:
          'Οι παρόντες Όροι & Προϋποθέσεις διέπουν τις αγορές μέσω της VYRO και, όπου εφαρμόζεται, τις παραγγελίες που συμφωνούνται απευθείας μαζί μας.',
        updated: 'Τελευταία ενημέρωση: 30 Σεπτεμβρίου 2026',

        notice:
          'Παρακαλούμε διαβάστε τους παρόντες όρους πριν πραγματοποιήσετε μια αγορά. Οι υποχρεωτικές διατάξεις της ελληνικής και ευρωπαϊκής νομοθεσίας υπερισχύουν όπου εφαρμόζονται.',

        sections: [
          {
            number: '01',
            title: 'Σχετικά με τη VYRO',
            content: (
              <>
                <p>
                  Το ηλεκτρονικό κατάστημα λειτουργεί με την εμπορική
                  ονομασία <strong>VYRO</strong>.
                </p>

                <div className="terms-info-card">
                  <p><strong>VYRO</strong></p>
                  <p>Κολίβα 68</p>
                  <p>Ζάκυνθος 291 00</p>
                  <p>Ελλάδα</p>
                  <p>
                    WhatsApp:{' '}
                    <a
                      href="https://wa.me/306978255016"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      +30 697 825 5016
                    </a>
                  </p>
                </div>

                <p>
                  Τυχόν πρόσθετα στοιχεία επιχείρησης ή φορολογικά /
                  εταιρικά στοιχεία που απαιτείται να δημοσιεύονται θα
                  προστεθούν όταν επιβεβαιωθούν.
                </p>
              </>
            ),
          },

          {
            number: '02',
            title: 'Προϊόντα',
            content: (
              <>
                <p>
                  Η VYRO διαθέτει προϊόντα τεχνολογίας, gaming hardware
                  και σχετικά αξεσουάρ.
                </p>

                <p>
                  Καταβάλλουμε εύλογη προσπάθεια ώστε οι περιγραφές,
                  προδιαγραφές, εικόνες, τιμές και πληροφορίες
                  διαθεσιμότητας να είναι ακριβείς.
                </p>

                <p>
                  Οι εικόνες προϊόντων μπορεί να είναι ενδεικτικές.
                  Συσκευασία ή μικρές λεπτομέρειες παρουσίασης του
                  κατασκευαστή ενδέχεται να διαφέρουν χωρίς να αλλάζει
                  ουσιωδώς το προϊόν που αγοράστηκε.
                </p>

                <p>
                  Αν εντοπιστεί ουσιώδες λάθος που επηρεάζει μια
                  παραγγελία, θα επικοινωνήσουμε μαζί σας πριν
                  προχωρήσουμε, όπου αυτό απαιτείται.
                </p>
              </>
            ),
          },

          {
            number: '03',
            title: 'Τιμές',
            content: (
              <>
                <p>
                  Οι τιμές λιανικής εμφανίζονται στη σχετική σελίδα
                  προϊόντος ή κατά την ολοκλήρωση της αγοράς.
                </p>

                <p>
                  Το συνολικό ποσό που οφείλεται, μαζί με τυχόν
                  εφαρμοζόμενα έξοδα παράδοσης ή άλλες χρεώσεις, θα
                  εμφανίζεται ή θα γνωστοποιείται πριν ο πελάτης
                  δεσμευτεί από την αγορά.
                </p>

                <p>
                  Οι τιμές χονδρικής είναι ξεχωριστές από τις τιμές
                  λιανικής και μπορεί να εξαρτώνται από το προϊόν, την
                  ποσότητα, τη διαθεσιμότητα και τους συμφωνημένους
                  εμπορικούς όρους.
                </p>
              </>
            ),
          },

          {
            number: '04',
            title: 'Παραγγελίες',
            content: (
              <>
                <p>
                  Η υποβολή παραγγελίας δεν εγγυάται από μόνη της ότι
                  η VYRO μπορεί να την εκτελέσει.
                </p>

                <p>
                  Οι παραγγελίες υπόκεινται σε διαθεσιμότητα, επιτυχή
                  πληρωμή όπου εφαρμόζεται και τελική επιβεβαίωση.
                </p>

                <p>Μπορεί να επικοινωνήσουμε μαζί σας εάν:</p>

                <ul>
                  <li>ένα προϊόν δεν είναι πλέον διαθέσιμο,</li>
                  <li>
                    υπάρχει προφανές σφάλμα στην τιμή ή στις
                    πληροφορίες προϊόντος,
                  </li>
                  <li>
                    απαιτούνται πρόσθετες πληροφορίες για την παράδοση,
                  </li>
                  <li>
                    η πληρωμή δεν μπορεί να ολοκληρωθεί ή να
                    επαληθευτεί, ή
                  </li>
                  <li>
                    άλλο ζήτημα εμποδίζει την εκτέλεση της
                    παραγγελίας.
                  </li>
                </ul>

                <p>
                  Εάν μια πληρωμένη παραγγελία δεν μπορεί να εκτελεστεί,
                  οποιοδήποτε ποσό πρέπει να επιστραφεί στον πελάτη θα
                  επιστρέφεται με κατάλληλο τρόπο.
                </p>
              </>
            ),
          },

          {
            number: '05',
            title: 'Πληρωμές',
            content: (
              <>
                <p>
                  Οι διαθέσιμοι τρόποι πληρωμής εμφανίζονται κατά την
                  ολοκλήρωση αγοράς ή συμφωνούνται απευθείας για
                  εφαρμοζόμενες εμπορικές παραγγελίες.
                </p>

                <p>
                  Πληρωμές που διεκπεραιώνονται μέσω τρίτων παρόχων
                  πληρωμών υπόκεινται επίσης στις τεχνικές διαδικασίες
                  και διαδικασίες ασφαλείας των αντίστοιχων παρόχων.
                </p>

                <p>
                  Η VYRO δεν ζητά από πελάτες να στέλνουν στοιχεία
                  τραπεζικής κάρτας μέσω WhatsApp.
                </p>
              </>
            ),
          },

          {
            number: '06',
            title: 'Παράδοση',
            content: (
              <>
                <p>
                  Οι διαθέσιμοι τρόποι παράδοσης, οι χρεώσεις και οι
                  σχετικές πληροφορίες θα γνωστοποιούνται πριν ο
                  καταναλωτής δεσμευτεί από την αγορά.
                </p>

                <p>
                  Τυχόν εκτιμώμενος χρόνος παράδοσης αποτελεί εκτίμηση,
                  εκτός εάν έχει συμφωνηθεί ρητά διαφορετικά.
                </p>

                <p>
                  Ο πελάτης είναι υπεύθυνος για την παροχή πλήρων και
                  σωστών στοιχείων παράδοσης.
                </p>

                <p>
                  Τίποτα στην παρούσα ενότητα δεν περιορίζει τα
                  υποχρεωτικά δικαιώματα του καταναλωτή σχετικά με την
                  παράδοση.
                </p>
              </>
            ),
          },

          {
            number: '07',
            title: 'Δικαίωμα υπαναχώρησης καταναλωτή',
            content: (
              <>
                <p>
                  Για επιλέξιμες εξ αποστάσεως αγορές, ο καταναλωτής
                  έχει κατά κανόνα το νόμιμο δικαίωμα να υπαναχωρήσει
                  από τη σύμβαση εντός <strong>14 ημερών</strong> χωρίς
                  να απαιτείται αιτιολόγηση, με την επιφύλαξη των
                  εξαιρέσεων που προβλέπει η εφαρμοστέα νομοθεσία.
                </p>

                <p>
                  Για αγαθά, η περίοδος υπαναχώρησης αρχίζει κατά
                  κανόνα όταν ο καταναλωτής ή τρίτο πρόσωπο που έχει
                  οριστεί από αυτόν, διαφορετικό από τον μεταφορέα,
                  παραλάβει τα αγαθά.
                </p>

                <p>
                  Για να ασκήσετε το δικαίωμα υπαναχώρησης, πρέπει να
                  μας γνωστοποιήσετε σαφώς την απόφασή σας πριν λήξει
                  η σχετική προθεσμία.
                </p>

                <p>
                  Μπορείτε να επικοινωνήσετε με τη VYRO μέσω των
                  στοιχείων επικοινωνίας που αναφέρονται στην παρούσα
                  σελίδα.
                </p>

                <p>
                  Εκτός εάν η VYRO συμφωνήσει διαφορετικά ή η
                  εφαρμοστέα νομοθεσία προβλέπει διαφορετικά, ο
                  καταναλωτής επιβαρύνεται με το άμεσο κόστος
                  επιστροφής προϊόντων όταν πρόκειται για υπαναχώρηση
                  λόγω αλλαγής γνώμης.
                </p>

                <p>
                  Η επιστροφή χρημάτων πραγματοποιείται σύμφωνα με την
                  εφαρμοστέα νομοθεσία περί προστασίας καταναλωτή.
                </p>
              </>
            ),
          },

          {
            number: '08',
            title: 'Κατάσταση επιστρεφόμενων προϊόντων',
            content: (
              <>
                <p>
                  Ο καταναλωτής μπορεί να ελέγξει ένα προϊόν στον
                  βαθμό που είναι εύλογα αναγκαίος για να διαπιστώσει
                  τη φύση, τα χαρακτηριστικά και τη λειτουργία του,
                  όπως θα μπορούσε συνήθως να το εξετάσει σε φυσικό
                  κατάστημα.
                </p>

                <p>
                  Εάν ο χειρισμός υπερβαίνει το αναγκαίο μέτρο και
                  προκαλεί μείωση της αξίας, η VYRO μπορεί να έχει
                  δικαίωμα να λάβει υπόψη τη συγκεκριμένη μείωση αξίας
                  στον βαθμό που επιτρέπεται από τον νόμο.
                </p>

                <p>
                  Όπου είναι εύλογα δυνατό, τα προϊόντα θα πρέπει να
                  επιστρέφονται μαζί με τα αξεσουάρ, τα έγγραφα και την
                  αρχική τους συσκευασία.
                </p>

                <p>
                  Η κατάσταση ή η απουσία της αρχικής συσκευασίας δεν
                  καταργεί από μόνη της υποχρεωτικά νόμιμα δικαιώματα
                  του καταναλωτή.
                </p>
              </>
            ),
          },

          {
            number: '09',
            title: 'Εξαιρέσεις από την υπαναχώρηση',
            content: (
              <>
                <p>
                  Το νόμιμο δικαίωμα υπαναχώρησης δεν εφαρμόζεται σε
                  ορισμένες περιπτώσεις που προβλέπονται από τη
                  νομοθεσία.
                </p>

                <p>
                  Η VYRO θα επικαλείται εξαίρεση μόνο όταν αυτή
                  εφαρμόζεται νόμιμα στη συγκεκριμένη συναλλαγή.
                </p>

                <p>
                  Κανένας όρος της παρούσας σελίδας δεν αποσκοπεί στην
                  κατάργηση δικαιώματος υπαναχώρησης που παρέχεται
                  υποχρεωτικά από τον νόμο.
                </p>
              </>
            ),
          },

          {
            number: '10',
            title: 'Ελαττωματικά ή μη συμμορφούμενα προϊόντα',
            content: (
              <>
                <p>
                  Οι καταναλωτικές αγορές προστατεύονται από τα νόμιμα
                  δικαιώματα που εφαρμόζονται όταν ένα προϊόν είναι
                  ελαττωματικό ή δεν ανταποκρίνεται στη σύμβαση
                  πώλησης.
                </p>

                <p>
                  Για νέα καταναλωτικά αγαθά εφαρμόζεται τουλάχιστον η
                  νόμιμη προστασία που προβλέπεται από την εφαρμοστέα
                  νομοθεσία, συμπεριλαμβανομένης της ελάχιστης
                  διετούς νόμιμης εγγύησης που προβλέπεται από τους
                  κανόνες της ΕΕ.
                </p>

                <p>
                  Ανάλογα με τις περιστάσεις και τις νόμιμες
                  προϋποθέσεις, οι διαθέσιμες λύσεις μπορεί να
                  περιλαμβάνουν επισκευή ή αντικατάσταση και, όπου
                  προβλέπεται, μείωση τιμής ή επιστροφή χρημάτων.
                </p>

                <p>
                  Τυχόν εμπορική ή κατασκευαστική εγγύηση είναι
                  πρόσθετη και δεν αντικαθιστά ούτε περιορίζει τα
                  υποχρεωτικά δικαιώματα του καταναλωτή.
                </p>
              </>
            ),
          },

          {
            number: '11',
            title: 'Χονδρικές και επαγγελματικές παραγγελίες',
            content: (
              <>
                <p>
                  Παραγγελίες από επιχειρήσεις, καταστήματα,
                  μεταπωλητές ή άλλα πρόσωπα που ενεργούν για σκοπούς
                  σχετικούς με την εμπορική ή επαγγελματική τους
                  δραστηριότητα αντιμετωπίζονται ως συναλλαγές B2B
                  όπου αυτό εφαρμόζεται νόμιμα.
                </p>

                <p>Οι τιμές χονδρικής υπόκεινται σε:</p>

                <ul>
                  <li>διαθεσιμότητα,</li>
                  <li>ζητούμενη ποσότητα,</li>
                  <li>τελική επιβεβαίωση τιμής,</li>
                  <li>όρους πληρωμής,</li>
                  <li>ρυθμίσεις παράδοσης, και</li>
                  <li>
                    τυχόν πρόσθετους εμπορικούς όρους που συμφωνούνται.
                  </li>
                </ul>

                <p>
                  Η αποστολή αιτήματος χονδρικής δεν δημιουργεί από
                  μόνη της υποχρέωση ολοκλήρωσης συναλλαγής.
                </p>

                <p>
                  Τα ειδικά δικαιώματα που παρέχονται από τη νομοθεσία
                  σε καταναλωτές δεν εφαρμόζονται αυτομάτως σε αγοραστές
                  που ενεργούν στο πλαίσιο επιχειρηματικής ή
                  επαγγελματικής δραστηριότητας.
                </p>
              </>
            ),
          },

          {
            number: '12',
            title: 'WhatsApp και άμεση επικοινωνία',
            content: (
              <>
                <p>
                  Η VYRO επιτρέπει σε πελάτες και εμπορικούς αγοραστές
                  να επικοινωνούν μέσω WhatsApp.
                </p>

                <p>
                  Μια συνομιλία ή ένα αίτημα μέσω WhatsApp δεν αποτελεί
                  από μόνο του αποδοχή ή τελική επιβεβαίωση
                  παραγγελίας.
                </p>

                <p>
                  Οι βασικοί εμπορικοί όροι μιας απευθείας παραγγελίας
                  θα επιβεβαιώνονται πριν ολοκληρωθεί η συναλλαγή.
                </p>

                <p>
                  Μην αποστέλλετε στοιχεία καρτών, κωδικούς πρόσβασης ή
                  άλλα περιττά ευαίσθητα στοιχεία μέσω WhatsApp.
                </p>
              </>
            ),
          },

          {
            number: '13',
            title: 'Ακυρώσεις πριν την αποστολή',
            content: (
              <>
                <p>
                  Αν επιθυμείτε να ακυρώσετε μια παραγγελία πριν την
                  αποστολή της, επικοινωνήστε με τη VYRO το συντομότερο
                  δυνατό.
                </p>

                <p>
                  Εφόσον η ακύρωση είναι ακόμη λειτουργικά δυνατή, θα
                  την επεξεργαστούμε αναλόγως.
                </p>

                <p>
                  Η ενότητα αυτή δεν περιορίζει τυχόν υποχρεωτικά
                  δικαιώματα ακύρωσης ή υπαναχώρησης.
                </p>
              </>
            ),
          },

          {
            number: '14',
            title: 'Επιστροφές χρημάτων',
            content: (
              <>
                <p>
                  Όπου οφείλεται επιστροφή χρημάτων, η VYRO θα την
                  επεξεργάζεται σύμφωνα με τις εφαρμοστέες νομικές
                  απαιτήσεις και τις περιστάσεις της συναλλαγής.
                </p>

                <p>
                  Σε νόμιμη υπαναχώρηση καταναλωτή, η επιστροφή
                  χρημάτων πραγματοποιείται εντός των προθεσμιών που
                  προβλέπει η εφαρμοστέα νομοθεσία.
                </p>

                <p>
                  Όπου επιτρέπεται, η VYRO μπορεί να αναμένει την
                  παραλαβή των επιστρεφόμενων αγαθών ή αποδεικτικό
                  αποστολής τους πριν ολοκληρώσει την επιστροφή.
                </p>

                <p>
                  Ο χρόνος εμφάνισης του ποσού στον λογαριασμό του
                  πελάτη μπορεί επίσης να εξαρτάται από την τράπεζα ή
                  τον πάροχο πληρωμών.
                </p>
              </>
            ),
          },

          {
            number: '15',
            title: 'Διαθεσιμότητα',
            content: (
              <>
                <p>
                  Η διαθεσιμότητα των προϊόντων μπορεί να αλλάξει χωρίς
                  προειδοποίηση.
                </p>

                <p>
                  Η εμφάνιση ενός προϊόντος στον ιστότοπο δεν εγγυάται
                  ότι θα παραμένει συνεχώς διαθέσιμο.
                </p>

                <p>
                  Για παραγγελίες χονδρικής, το διαθέσιμο απόθεμα και
                  οι ποσότητες επιβεβαιώνονται πριν προχωρήσει η
                  συναλλαγή.
                </p>
              </>
            ),
          },

          {
            number: '16',
            title: 'Πνευματική και διανοητική ιδιοκτησία',
            content: (
              <>
                <p>
                  Εκτός εάν αναφέρεται διαφορετικά, η εμπορική
                  ονομασία VYRO, ο σχεδιασμός του ιστοτόπου, το
                  πρωτότυπο κείμενο, τα γραφικά και άλλο πρωτότυπο
                  υλικό της VYRO προστατεύονται από την εφαρμοστέα
                  νομοθεσία περί διανοητικής ιδιοκτησίας.
                </p>

                <p>
                  Ονομασίες προϊόντων, εμπορικά σήματα και λογότυπα
                  τρίτων ανήκουν στους αντίστοιχους ιδιοκτήτες τους.
                </p>

                <p>
                  Αναφορές σε τρίτες μάρκες χρησιμοποιούνται για
                  αναγνώριση προϊόντων ή συμβατότητας και δεν
                  συνεπάγονται από μόνες τους χορηγία, συνεργασία ή
                  έγκριση.
                </p>
              </>
            ),
          },

          {
            number: '17',
            title: 'Χρήση του ιστοτόπου',
            content: (
              <>
                <p>
                  Δεν επιτρέπεται η σκόπιμη κατάχρηση του ιστοτόπου,
                  η παρεμπόδιση της λειτουργίας του, η απόπειρα μη
                  εξουσιοδοτημένης πρόσβασης, η εισαγωγή κακόβουλου
                  λογισμικού ή η χρήση του για παράνομο σκοπό.
                </p>

                <p>
                  Μπορούμε να τροποποιούμε, να συντηρούμε ή να
                  αναστέλλουμε προσωρινά τμήματα του ιστοτόπου όταν
                  αυτό είναι εύλογα αναγκαίο.
                </p>
              </>
            ),
          },

          {
            number: '18',
            title: 'Ευθύνη',
            content: (
              <>
                <p>
                  Τίποτα στους παρόντες Όρους δεν αποκλείει ή
                  περιορίζει ευθύνη όταν αυτό θα ήταν παράνομο ούτε
                  περιορίζει υποχρεωτικά δικαιώματα καταναλωτών.
                </p>

                <p>
                  Στον βαθμό που επιτρέπεται από την εφαρμοστέα
                  νομοθεσία, η VYRO δεν ευθύνεται για απώλειες που
                  προκύπτουν από περιστάσεις εκτός του εύλογου ελέγχου
                  της.
                </p>

                <p>
                  Για συναλλαγές μεταξύ επιχειρήσεων μπορούν να
                  συμφωνηθούν πρόσθετοι εμπορικοί όροι για τη
                  συγκεκριμένη συναλλαγή.
                </p>
              </>
            ),
          },

          {
            number: '19',
            title: 'Προσωπικά δεδομένα',
            content: (
              <>
                <p>
                  Τα προσωπικά δεδομένα διαχειρίζονται σύμφωνα με την
                  Πολιτική Απορρήτου της VYRO και την εφαρμοστέα
                  νομοθεσία προστασίας δεδομένων.
                </p>

                <p>
                  Η Πολιτική Απορρήτου πρέπει να διαβάζεται μαζί με
                  τους παρόντες Όρους.
                </p>
              </>
            ),
          },

          {
            number: '20',
            title: 'Αλλαγές στους Όρους',
            content: (
              <>
                <p>
                  Η VYRO μπορεί να ενημερώνει τους παρόντες Όρους όταν
                  είναι απαραίτητο λόγω αλλαγών στον ιστότοπο, στις
                  επιχειρηματικές λειτουργίες ή στις εφαρμοστέες
                  απαιτήσεις.
                </p>

                <p>
                  Η τελευταία έκδοση θα εμφανίζεται σε αυτή τη σελίδα
                  μαζί με την ημερομηνία τελευταίας ενημέρωσης.
                </p>
              </>
            ),
          },

          {
            number: '21',
            title: 'Εφαρμοστέο δίκαιο και δικαιώματα καταναλωτή',
            content: (
              <>
                <p>
                  Οι παρόντες Όροι προορίζονται να λειτουργούν σύμφωνα
                  με την εφαρμοστέα ελληνική νομοθεσία και το δίκαιο
                  της Ευρωπαϊκής Ένωσης.
                </p>

                <p>
                  Τίποτα στους παρόντες Όρους δεν στερεί από
                  καταναλωτή υποχρεωτική προστασία που του παρέχεται
                  από την εφαρμοστέα νομοθεσία.
                </p>

                <p>
                  Όπου υποχρεωτικοί κανόνες παρέχουν πρόσθετα
                  δικαιώματα, τα δικαιώματα αυτά εξακολουθούν να
                  εφαρμόζονται ανεξάρτητα από τους παρόντες Όρους.
                </p>
              </>
            ),
          },

          {
            number: '22',
            title: 'Παράπονα και διαφορές',
            content: (
              <>
                <p>
                  Αν αντιμετωπίζετε πρόβλημα με παραγγελία,
                  επικοινωνήστε πρώτα με τη VYRO ώστε να εξετάσουμε το
                  ζήτημα.
                </p>

                <p>
                  Οι καταναλωτές μπορούν επίσης να έχουν πρόσβαση στις
                  αρμόδιες αρχές προστασίας καταναλωτή ή σε
                  αναγνωρισμένους μηχανισμούς εναλλακτικής επίλυσης
                  διαφορών, όπου εφαρμόζεται.
                </p>

                <p>
                  Η ενότητα αυτή δεν εμποδίζει κανένα μέρος να ασκήσει
                  δικαιώματα που του παρέχει η εφαρμοστέα νομοθεσία.
                </p>
              </>
            ),
          },

          {
            number: '23',
            title: 'Επικοινωνία',
            content: (
              <>
                <p>
                  Για ερωτήσεις σχετικά με μια παραγγελία ή τους
                  παρόντες Όρους:
                </p>

                <div className="terms-info-card">
                  <p><strong>VYRO</strong></p>
                  <p>Κολίβα 68</p>
                  <p>Ζάκυνθος 291 00</p>
                  <p>Ελλάδα</p>
                  <p>
                    WhatsApp:{' '}
                    <a
                      href="https://wa.me/306978255016"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      +30 697 825 5016
                    </a>
                  </p>
                </div>

                <p>
                  Αν επικοινωνείτε σχετικά με υπάρχουσα αγορά,
                  συμπεριλάβετε τις σχετικές πληροφορίες παραγγελίας.
                </p>
              </>
            ),
          },
        ],

        footerText: 'Technology retail & wholesale.',
        terms: 'Όροι',
        privacy: 'Απόρρητο',
        backTop: 'Επιστροφή στην κορυφή',
      }
    : {
        retail: 'RETAIL',
        wholesale: 'WHOLESALE',
        termsNav: 'TERMS',
        privacyNav: 'PRIVACY',

        label: 'VYRO · LEGAL',
        title: 'Terms & Conditions',
        intro:
          'These Terms & Conditions govern purchases made through VYRO and, where applicable, orders agreed directly with us.',
        updated: 'Last updated: 30 September 2026',

        notice:
          'Please read these Terms before making a purchase. Mandatory protections under applicable Greek and European Union law continue to apply.',

        sections: [
          {
            number: '01',
            title: 'About VYRO',
            content: (
              <>
                <p>
                  The online store operates under the trading name{' '}
                  <strong>VYRO</strong>.
                </p>

                <div className="terms-info-card">
                  <p><strong>VYRO</strong></p>
                  <p>Koliva 68</p>
                  <p>Zakynthos 291 00</p>
                  <p>Greece</p>
                  <p>
                    WhatsApp:{' '}
                    <a
                      href="https://wa.me/306978255016"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      +30 697 825 5016
                    </a>
                  </p>
                </div>

                <p>
                  Any additional business, registration or tax
                  information that is legally required to be displayed
                  will be added once confirmed.
                </p>
              </>
            ),
          },

          {
            number: '02',
            title: 'Products',
            content: (
              <>
                <p>
                  VYRO sells technology products, gaming hardware and
                  related accessories.
                </p>

                <p>
                  We make reasonable efforts to ensure that product
                  descriptions, specifications, images, prices and
                  availability information are accurate.
                </p>

                <p>
                  Product images may be illustrative. Packaging or
                  minor manufacturer presentation details may vary
                  without materially changing the product purchased.
                </p>

                <p>
                  If we discover a material error affecting an order,
                  we will contact you before proceeding where
                  appropriate.
                </p>
              </>
            ),
          },

          {
            number: '03',
            title: 'Prices',
            content: (
              <>
                <p>
                  Retail prices are displayed on the relevant product
                  or checkout page.
                </p>

                <p>
                  The total amount payable, together with applicable
                  delivery costs or other charges, will be displayed
                  or communicated before the customer becomes bound by
                  the purchase.
                </p>

                <p>
                  Wholesale pricing is separate from consumer retail
                  pricing and may depend on the product, quantity,
                  availability and commercial terms agreed for the
                  particular order.
                </p>
              </>
            ),
          },

          {
            number: '04',
            title: 'Orders',
            content: (
              <>
                <p>
                  Submitting an order does not by itself guarantee that
                  VYRO can fulfil it.
                </p>

                <p>
                  Orders are subject to availability, successful
                  payment where applicable and final order
                  confirmation.
                </p>

                <p>We may contact you if:</p>

                <ul>
                  <li>a product becomes unavailable,</li>
                  <li>
                    there is an obvious pricing or product-information
                    error,
                  </li>
                  <li>additional delivery information is required,</li>
                  <li>
                    payment cannot be completed or verified, or
                  </li>
                  <li>
                    another issue prevents us from fulfilling the
                    order.
                  </li>
                </ul>

                <p>
                  If a paid order cannot be fulfilled, any amount due
                  back to the customer will be refunded using an
                  appropriate method.
                </p>
              </>
            ),
          },

          {
            number: '05',
            title: 'Payment',
            content: (
              <>
                <p>
                  Available payment methods are displayed during
                  checkout or agreed directly for an applicable trade
                  order.
                </p>

                <p>
                  Payments processed through third-party payment
                  providers are also subject to the technical and
                  security procedures of those providers.
                </p>

                <p>
                  VYRO does not ask customers to send payment-card
                  details through WhatsApp.
                </p>
              </>
            ),
          },

          {
            number: '06',
            title: 'Delivery',
            content: (
              <>
                <p>
                  Available delivery methods, charges and relevant
                  delivery information will be communicated before the
                  consumer becomes bound by the purchase.
                </p>

                <p>
                  Any delivery estimate is an estimate unless expressly
                  agreed otherwise.
                </p>

                <p>
                  Customers are responsible for providing complete and
                  accurate delivery information.
                </p>

                <p>
                  Nothing in this section limits mandatory consumer
                  rights concerning delivery.
                </p>
              </>
            ),
          },

          {
            number: '07',
            title: 'Consumer Right of Withdrawal',
            content: (
              <>
                <p>
                  For eligible distance purchases, consumers generally
                  have a legal right to withdraw from the contract
                  within <strong>14 days</strong> without giving a
                  reason, subject to exceptions under applicable law.
                </p>

                <p>
                  For goods, the withdrawal period generally begins
                  when you, or a person designated by you other than
                  the carrier, receives the goods.
                </p>

                <p>
                  To exercise your right of withdrawal, you must
                  communicate a clear decision to withdraw before the
                  applicable deadline.
                </p>

                <p>
                  You may contact VYRO using the contact information
                  provided on this page.
                </p>

                <p>
                  Unless VYRO agrees otherwise or applicable law
                  requires otherwise, the consumer bears the direct
                  cost of returning goods following a change-of-mind
                  withdrawal.
                </p>

                <p>
                  Reimbursement following a valid withdrawal will be
                  handled in accordance with applicable consumer law.
                </p>
              </>
            ),
          },

          {
            number: '08',
            title: 'Condition of Returned Goods',
            content: (
              <>
                <p>
                  Consumers may inspect a product to the extent
                  reasonably necessary to establish its nature,
                  characteristics and functioning, similarly to how it
                  could ordinarily be inspected in a physical shop.
                </p>

                <p>
                  Where handling goes beyond what is necessary and
                  causes diminished value, VYRO may be entitled to
                  account for that diminished value to the extent
                  permitted by law.
                </p>

                <p>
                  Where reasonably possible, products should be
                  returned with included accessories, documentation and
                  original packaging.
                </p>

                <p>
                  The absence or condition of original packaging does
                  not by itself remove mandatory statutory consumer
                  rights.
                </p>
              </>
            ),
          },

          {
            number: '09',
            title: 'Exceptions to Withdrawal',
            content: (
              <>
                <p>
                  The statutory right of withdrawal does not apply in
                  certain circumstances specified by law.
                </p>

                <p>
                  VYRO will rely on an exception only where it legally
                  applies to the particular transaction.
                </p>

                <p>
                  Nothing in these Terms is intended to remove a
                  statutory withdrawal right where the customer is
                  legally entitled to one.
                </p>
              </>
            ),
          },

          {
            number: '10',
            title: 'Faulty or Non-Conforming Products',
            content: (
              <>
                <p>
                  Consumer purchases are protected by statutory rights
                  applicable where goods are defective or do not
                  conform to the sales contract.
                </p>

                <p>
                  New consumer goods benefit from at least the
                  statutory protection required by applicable law,
                  including the minimum two-year legal guarantee
                  provided under EU consumer rules.
                </p>

                <p>
                  Depending on the circumstances and legal conditions,
                  remedies may include repair or replacement and, where
                  provided by law, a price reduction or refund.
                </p>

                <p>
                  Any manufacturer or commercial warranty is additional
                  to and does not replace or reduce mandatory statutory
                  consumer rights.
                </p>
              </>
            ),
          },

          {
            number: '11',
            title: 'Wholesale and Business Orders',
            content: (
              <>
                <p>
                  Orders placed by businesses, retailers, resellers or
                  other persons acting for purposes relating to their
                  trade, business, craft or profession are treated as
                  business-to-business transactions where legally
                  applicable.
                </p>

                <p>Wholesale pricing is subject to:</p>

                <ul>
                  <li>availability,</li>
                  <li>requested quantity,</li>
                  <li>final pricing confirmation,</li>
                  <li>payment terms,</li>
                  <li>delivery arrangements, and</li>
                  <li>
                    any additional commercial terms agreed for the
                    transaction.
                  </li>
                </ul>

                <p>
                  A wholesale enquiry does not by itself create an
                  obligation for either party to complete a
                  transaction.
                </p>

                <p>
                  Consumer-specific statutory rights do not
                  automatically apply to buyers acting in a business
                  or professional capacity.
                </p>
              </>
            ),
          },

          {
            number: '12',
            title: 'WhatsApp and Direct Enquiries',
            content: (
              <>
                <p>
                  VYRO allows customers and trade buyers to communicate
                  through WhatsApp.
                </p>

                <p>
                  A WhatsApp conversation or enquiry does not by itself
                  constitute acceptance or final confirmation of an
                  order.
                </p>

                <p>
                  Essential commercial terms for a directly arranged
                  order will be confirmed before the transaction is
                  completed.
                </p>

                <p>
                  Do not send payment-card details, passwords or other
                  unnecessary sensitive information through WhatsApp.
                </p>
              </>
            ),
          },

          {
            number: '13',
            title: 'Cancellations Before Dispatch',
            content: (
              <>
                <p>
                  If you wish to cancel an order before dispatch,
                  contact VYRO as soon as possible.
                </p>

                <p>
                  Where cancellation is still operationally possible,
                  we will process it accordingly.
                </p>

                <p>
                  This section does not restrict mandatory cancellation
                  or withdrawal rights available under applicable law.
                </p>
              </>
            ),
          },

          {
            number: '14',
            title: 'Refunds',
            content: (
              <>
                <p>
                  Where a refund is due, VYRO will process it in
                  accordance with applicable legal requirements and
                  the circumstances of the transaction.
                </p>

                <p>
                  Where legally required, reimbursement following a
                  valid consumer withdrawal will be made within the
                  applicable statutory period.
                </p>

                <p>
                  Where permitted, VYRO may wait until returned goods
                  are received, or evidence of return is provided,
                  before completing reimbursement.
                </p>

                <p>
                  The time required for a refunded amount to appear in
                  the customer's account may also depend on the
                  relevant bank or payment provider.
                </p>
              </>
            ),
          },

          {
            number: '15',
            title: 'Product Availability',
            content: (
              <>
                <p>Product availability may change.</p>

                <p>
                  Products displayed on the website are not guaranteed
                  to remain continuously available.
                </p>

                <p>
                  For wholesale orders in particular, available stock
                  and quantities will be confirmed before the
                  transaction proceeds.
                </p>
              </>
            ),
          },

          {
            number: '16',
            title: 'Intellectual Property',
            content: (
              <>
                <p>
                  Unless otherwise stated, the VYRO trading name,
                  website design, original text, graphics and other
                  original VYRO materials are protected by applicable
                  intellectual-property laws.
                </p>

                <p>
                  Third-party product names, trademarks and logos
                  belong to their respective owners.
                </p>

                <p>
                  References to third-party brands are used for product
                  identification or compatibility purposes and do not
                  by themselves imply sponsorship, partnership or
                  endorsement.
                </p>
              </>
            ),
          },

          {
            number: '17',
            title: 'Website Use',
            content: (
              <>
                <p>
                  You must not intentionally misuse the VYRO website,
                  interfere with its operation, attempt unauthorised
                  access, introduce malicious software or use the
                  website for an unlawful purpose.
                </p>

                <p>
                  We may modify, maintain or temporarily suspend parts
                  of the website where reasonably necessary.
                </p>
              </>
            ),
          },

          {
            number: '18',
            title: 'Liability',
            content: (
              <>
                <p>
                  Nothing in these Terms excludes or limits liability
                  where doing so would be unlawful, nor does anything
                  in these Terms limit mandatory consumer rights.
                </p>

                <p>
                  To the extent permitted by applicable law, VYRO is
                  not responsible for losses resulting from
                  circumstances outside its reasonable control.
                </p>

                <p>
                  Additional commercial terms may be agreed for
                  individual business-to-business transactions.
                </p>
              </>
            ),
          },

          {
            number: '19',
            title: 'Personal Data',
            content: (
              <>
                <p>
                  Personal information is handled in accordance with
                  the VYRO Privacy Policy and applicable data
                  protection law.
                </p>

                <p>
                  The Privacy Policy should be read alongside these
                  Terms.
                </p>
              </>
            ),
          },

          {
            number: '20',
            title: 'Changes to These Terms',
            content: (
              <>
                <p>
                  VYRO may update these Terms where necessary to
                  reflect changes to the website, business operations
                  or applicable requirements.
                </p>

                <p>
                  The latest version will be displayed on this page
                  together with its most recent update date.
                </p>
              </>
            ),
          },

          {
            number: '21',
            title: 'Applicable Law and Consumer Rights',
            content: (
              <>
                <p>
                  These Terms are intended to operate in accordance
                  with applicable Greek law and European Union law.
                </p>

                <p>
                  Nothing in these Terms deprives consumers of
                  mandatory protections available under applicable
                  consumer law.
                </p>

                <p>
                  Where mandatory rules provide additional rights,
                  those rights continue to apply regardless of these
                  Terms.
                </p>
              </>
            ),
          },

          {
            number: '22',
            title: 'Complaints and Disputes',
            content: (
              <>
                <p>
                  If you experience a problem with an order, please
                  contact VYRO first so that the matter can be
                  reviewed.
                </p>

                <p>
                  Consumers may also have access to competent consumer
                  protection authorities or legally recognised
                  alternative dispute-resolution mechanisms where
                  applicable.
                </p>

                <p>
                  Nothing in this section prevents either party from
                  exercising rights available under applicable law.
                </p>
              </>
            ),
          },

          {
            number: '23',
            title: 'Contact',
            content: (
              <>
                <p>
                  For questions about an order or these Terms:
                </p>

                <div className="terms-info-card">
                  <p><strong>VYRO</strong></p>
                  <p>Koliva 68</p>
                  <p>Zakynthos 291 00</p>
                  <p>Greece</p>
                  <p>
                    WhatsApp:{' '}
                    <a
                      href="https://wa.me/306978255016"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      +30 697 825 5016
                    </a>
                  </p>
                </div>

                <p>
                  If your enquiry relates to an existing purchase,
                  please include the relevant order information.
                </p>
              </>
            ),
          },
        ],

        footerText: 'Technology retail & wholesale.',
        terms: 'Terms',
        privacy: 'Privacy',
        backTop: 'Back to top',
      }

  return (
    <main id="top" className="site-shell terms-page">
      {/* HEADER */}

      <header className="site-header">
        <Link href="/" className="brand" onClick={closeMenu}>
          <span className="brand-dot" />
          VYRO
        </Link>

        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'}>
          <Link href="/" onClick={closeMenu}>
            {copy.retail}
          </Link>

          <Link href="/wholesale" onClick={closeMenu}>
            {copy.wholesale}
          </Link>

          <Link href="/terms" onClick={closeMenu}>
            {copy.termsNav}
          </Link>

          <Link href="/privacy" onClick={closeMenu}>
            {copy.privacyNav}
          </Link>
        </nav>

        <div className="header-actions">
          <button
            className="language-toggle"
            onClick={() => setLanguage(greek ? 'EN' : 'EL')}
            aria-label="Change language"
          >
            <Globe2 size={15} />
            {language}
          </button>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* HERO */}

      <section className="terms-hero">
        <div className="terms-hero-glow" />

        <div className="terms-hero-inner">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            {copy.label}
          </div>

          <h1>{copy.title}</h1>

          <p className="terms-hero-intro">{copy.intro}</p>

          <div className="terms-updated">
            {copy.updated}
          </div>
        </div>
      </section>

      {/* NOTICE */}

      <section className="section terms-notice-section">
        <div className="terms-notice">
          <ShieldCheck size={20} />

          <p>{copy.notice}</p>
        </div>
      </section>

      {/* TERMS */}

      <section className="section terms-content-section">
        <div className="terms-content">
          {copy.sections.map((section) => (
            <article
              className="terms-section"
              key={`${section.number}-${section.title}`}
            >
              <div className="terms-section-number">
                {section.number}
              </div>

              <div className="terms-section-body">
                <h2>{section.title}</h2>

                <div className="terms-section-copy">
                  {section.content}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* BACK TO TOP */}

      <section className="section terms-back-section">
        <a href="#top" className="button button-ghost">
          {copy.backTop}
          <ArrowUp size={15} />
        </a>
      </section>

      {/* FOOTER */}

      <footer className="site-footer retail-footer">
        <div className="footer-brand">
          <Link href="/" className="brand">
            <span className="brand-dot" />
            VYRO
          </Link>

          <p>{copy.footerText}</p>
        </div>

        <div className="footer-links">
          <Link href="/">
            {copy.retail}
          </Link>

          <Link href="/wholesale">
            {copy.wholesale}
          </Link>

          <Link href="/creators">
            CREATORS
          </Link>
        </div>

        <div className="footer-legal">
          <span>© 2026 VYRO</span>

          <Link href="/terms">
            {copy.terms}
          </Link>

          <Link href="/privacy">
            {copy.privacy}
          </Link>
        </div>
      </footer>
    </main>
  )
}
