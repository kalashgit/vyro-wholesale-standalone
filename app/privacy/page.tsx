'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowUp,
  Globe2,
  LockKeyhole,
  Menu,
  X,
} from 'lucide-react'

type Language = 'EL' | 'EN'

export default function PrivacyPage() {
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

        label: 'VYRO · ΑΠΟΡΡΗΤΟ',
        title: 'Πολιτική Απορρήτου',
        intro:
          'Η παρούσα Πολιτική Απορρήτου εξηγεί πώς η VYRO συλλέγει, χρησιμοποιεί, αποθηκεύει και προστατεύει προσωπικά δεδομένα όταν χρησιμοποιείτε τον ιστότοπό μας, πραγματοποιείτε μια αγορά ή επικοινωνείτε μαζί μας.',
        updated: 'Τελευταία ενημέρωση: 30 Σεπτεμβρίου 2026',

        notice:
          'Η VYRO επεξεργάζεται προσωπικά δεδομένα μόνο όταν υπάρχει νόμιμος σκοπός και προσπαθεί να περιορίζει τη συλλογή δεδομένων σε όσα είναι απαραίτητα για τη λειτουργία της υπηρεσίας.',

        sections: [
          {
            number: '01',
            title: 'Ποιος είναι υπεύθυνος για τα δεδομένα σας',
            content: (
              <>
                <p>
                  Για τις δραστηριότητες επεξεργασίας που περιγράφονται
                  στην παρούσα Πολιτική, η <strong>VYRO</strong> ενεργεί
                  ως υπεύθυνος επεξεργασίας όπου αυτό προβλέπεται από
                  την εφαρμοστέα νομοθεσία.
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
                  Μπορείτε να χρησιμοποιήσετε τα παραπάνω στοιχεία για
                  ερωτήσεις σχετικά με την προστασία των προσωπικών σας
                  δεδομένων ή για την άσκηση των δικαιωμάτων σας.
                </p>
              </>
            ),
          },

          {
            number: '02',
            title: 'Ποια δεδομένα μπορεί να συλλέγουμε',
            content: (
              <>
                <p>
                  Ανάλογα με τον τρόπο που χρησιμοποιείτε τη VYRO,
                  μπορεί να επεξεργαζόμαστε τις ακόλουθες κατηγορίες
                  προσωπικών δεδομένων:
                </p>

                <ul>
                  <li>όνομα και επώνυμο,</li>
                  <li>αριθμό τηλεφώνου,</li>
                  <li>
                    διεύθυνση email, εφόσον μας παρέχεται στο πλαίσιο
                    παραγγελίας ή επικοινωνίας,
                  </li>
                  <li>
                    διεύθυνση χρέωσης ή/και παράδοσης,
                  </li>
                  <li>
                    πληροφορίες σχετικά με την παραγγελία και τα
                    προϊόντα που αγοράζετε,
                  </li>
                  <li>
                    πληροφορίες πληρωμής και συναλλαγής που μας
                    παρέχονται από τον σχετικό πάροχο πληρωμών,
                  </li>
                  <li>
                    περιεχόμενο επικοινωνίας που μας στέλνετε μέσω
                    WhatsApp ή άλλου διαθέσιμου καναλιού,
                  </li>
                  <li>
                    στοιχεία που απαιτούνται για τιμολόγηση,
                    λογιστικές ή άλλες νόμιμες υποχρεώσεις, όπου
                    εφαρμόζεται, και
                  </li>
                  <li>
                    βασικά τεχνικά δεδομένα που μπορεί να είναι
                    απαραίτητα για την ασφαλή και σωστή λειτουργία του
                    ιστοτόπου.
                  </li>
                </ul>

                <p>
                  Δεν σας ζητάμε να μας στέλνετε στοιχεία τραπεζικής
                  κάρτας, κωδικούς πρόσβασης ή άλλα περιττά ευαίσθητα
                  στοιχεία μέσω WhatsApp.
                </p>
              </>
            ),
          },

          {
            number: '03',
            title: 'Πώς συλλέγουμε τα δεδομένα',
            content: (
              <>
                <p>
                  Τα περισσότερα προσωπικά δεδομένα που επεξεργαζόμαστε
                  παρέχονται απευθείας από εσάς όταν:
                </p>

                <ul>
                  <li>πραγματοποιείτε ή επιχειρείτε μια αγορά,</li>
                  <li>μας δίνετε στοιχεία παράδοσης,</li>
                  <li>
                    επικοινωνείτε μαζί μας μέσω WhatsApp ή άλλου
                    καναλιού,
                  </li>
                  <li>ζητάτε προσφορά χονδρικής,</li>
                  <li>ζητάτε επιστροφή ή υποστήριξη, ή</li>
                  <li>
                    μας παρέχετε πληροφορίες για την εκτέλεση μιας
                    συναλλαγής.
                  </li>
                </ul>

                <p>
                  Μπορεί επίσης να λαμβάνουμε περιορισμένες πληροφορίες
                  από παρόχους πληρωμών, μεταφορικές εταιρείες ή άλλους
                  παρόχους υπηρεσιών που χρησιμοποιούνται για την
                  ολοκλήρωση μιας συναλλαγής.
                </p>
              </>
            ),
          },

          {
            number: '04',
            title: 'Γιατί χρησιμοποιούμε τα δεδομένα σας',
            content: (
              <>
                <p>
                  Μπορεί να χρησιμοποιούμε προσωπικά δεδομένα για:
                </p>

                <ul>
                  <li>
                    την επεξεργασία και εκτέλεση παραγγελιών,
                  </li>
                  <li>
                    την επεξεργασία πληρωμών μέσω των σχετικών παρόχων,
                  </li>
                  <li>
                    την οργάνωση παράδοσης προϊόντων,
                  </li>
                  <li>
                    την επικοινωνία σχετικά με παραγγελίες,
                  </li>
                  <li>
                    την απάντηση σε ερωτήματα πελατών,
                  </li>
                  <li>
                    την επεξεργασία επιστροφών, υπαναχωρήσεων,
                    παραπόνων ή ζητημάτων υποστήριξης,
                  </li>
                  <li>
                    την επεξεργασία αιτημάτων χονδρικής,
                  </li>
                  <li>
                    την πρόληψη ή διερεύνηση απάτης και κατάχρησης,
                    όπου αυτό είναι αναγκαίο και νόμιμο,
                  </li>
                  <li>
                    τη συμμόρφωση με λογιστικές, φορολογικές ή άλλες
                    νομικές υποχρεώσεις, και
                  </li>
                  <li>
                    την ασφάλεια και ορθή λειτουργία του ιστοτόπου.
                  </li>
                </ul>
              </>
            ),
          },

          {
            number: '05',
            title: 'Νομική βάση επεξεργασίας',
            content: (
              <>
                <p>
                  Ανάλογα με τη συγκεκριμένη δραστηριότητα, η
                  επεξεργασία μπορεί να βασίζεται:
                </p>

                <ul>
                  <li>
                    στην αναγκαιότητα για τη σύναψη ή εκτέλεση σύμβασης
                    μαζί σας,
                  </li>
                  <li>
                    στη συμμόρφωση της VYRO με εφαρμοζόμενη νομική
                    υποχρέωση,
                  </li>
                  <li>
                    σε έννομο συμφέρον της VYRO, όπου αυτό είναι νόμιμο
                    και δεν υπερισχύουν τα δικαιώματα και οι ελευθερίες
                    σας, ή
                  </li>
                  <li>
                    στη συγκατάθεσή σας, όταν η συγκατάθεση αποτελεί
                    την κατάλληλη νομική βάση.
                  </li>
                </ul>

                <p>
                  Όπου η επεξεργασία βασίζεται στη συγκατάθεση, μπορείτε
                  να την ανακαλέσετε σύμφωνα με την εφαρμοστέα
                  νομοθεσία. Η ανάκληση δεν επηρεάζει τη νομιμότητα της
                  επεξεργασίας που πραγματοποιήθηκε πριν από αυτή.
                </p>
              </>
            ),
          },

          {
            number: '06',
            title: 'Παραγγελίες και πληρωμές',
            content: (
              <>
                <p>
                  Όταν πραγματοποιείτε αγορά, επεξεργαζόμαστε τις
                  πληροφορίες που είναι απαραίτητες για την παραγγελία,
                  την πληρωμή, την παράδοση και την εξυπηρέτηση μετά την
                  πώληση.
                </p>

                <p>
                  Οι πληρωμές μπορεί να διεκπεραιώνονται από τρίτους
                  παρόχους πληρωμών. Ο πάροχος πληρωμών μπορεί να
                  επεξεργάζεται στοιχεία πληρωμής σύμφωνα με τη δική
                  του πολιτική απορρήτου και τις δικές του νομικές
                  υποχρεώσεις.
                </p>

                <p>
                  Η VYRO δεν ζητά από πελάτες να αποστέλλουν πλήρη
                  στοιχεία τραπεζικής κάρτας μέσω WhatsApp.
                </p>
              </>
            ),
          },

          {
            number: '07',
            title: 'WhatsApp',
            content: (
              <>
                <p>
                  Εάν επιλέξετε να επικοινωνήσετε με τη VYRO μέσω
                  WhatsApp, θα επεξεργαστούμε τις πληροφορίες που μας
                  στέλνετε για να απαντήσουμε στο αίτημά σας, να
                  προετοιμάσουμε προσφορά ή να διαχειριστούμε σχετική
                  παραγγελία.
                </p>

                <p>
                  Η χρήση του WhatsApp συνεπάγεται επίσης επεξεργασία
                  δεδομένων από τον πάροχο της υπηρεσίας σύμφωνα με
                  τους δικούς του όρους και πολιτικές απορρήτου.
                </p>

                <p>
                  Σας συνιστούμε να μην αποστέλλετε μέσω WhatsApp
                  πληροφορίες που δεν είναι απαραίτητες για το αίτημα
                  ή την παραγγελία σας.
                </p>
              </>
            ),
          },

          {
            number: '08',
            title: 'Παράδοση και συνεργάτες υπηρεσιών',
            content: (
              <>
                <p>
                  Για την εκτέλεση μιας παραγγελίας μπορεί να είναι
                  απαραίτητο να κοινοποιήσουμε συγκεκριμένες
                  πληροφορίες σε μεταφορικές ή courier εταιρείες.
                </p>

                <p>
                  Οι πληροφορίες αυτές περιορίζονται σε ό,τι είναι
                  εύλογα απαραίτητο για την παροχή της σχετικής
                  υπηρεσίας, όπως όνομα, στοιχεία επικοινωνίας και
                  διεύθυνση παράδοσης.
                </p>

                <p>
                  Μπορεί επίσης να χρησιμοποιούμε άλλους τεχνικούς,
                  επαγγελματικούς ή οικονομικούς παρόχους όταν αυτό
                  είναι απαραίτητο για τη λειτουργία της επιχείρησης
                  και επιτρέπεται από τον νόμο.
                </p>
              </>
            ),
          },

          {
            number: '09',
            title: 'Σε ποιους μπορεί να κοινοποιούνται δεδομένα',
            content: (
              <>
                <p>
                  Όπου είναι απαραίτητο, προσωπικά δεδομένα μπορεί να
                  κοινοποιούνται σε κατηγορίες αποδεκτών όπως:
                </p>

                <ul>
                  <li>πάροχοι πληρωμών,</li>
                  <li>μεταφορικές και courier εταιρείες,</li>
                  <li>
                    πάροχοι φιλοξενίας ιστοτόπου και τεχνικών υπηρεσιών,
                  </li>
                  <li>
                    λογιστές ή άλλοι επαγγελματικοί σύμβουλοι, όπου
                    απαιτείται,
                  </li>
                  <li>
                    δημόσιες αρχές όταν υπάρχει σχετική νόμιμη
                    υποχρέωση, και
                  </li>
                  <li>
                    άλλοι πάροχοι που είναι απαραίτητοι για την
                    ολοκλήρωση της υπηρεσίας που ζητήσατε.
                  </li>
                </ul>

                <p>
                  Δεν πωλούμε προσωπικά δεδομένα πελατών.
                </p>
              </>
            ),
          },

          {
            number: '10',
            title: 'Διεθνείς διαβιβάσεις',
            content: (
              <>
                <p>
                  Ορισμένοι τρίτοι πάροχοι τεχνολογίας ή επικοινωνίας
                  μπορεί να επεξεργάζονται δεδομένα εκτός Ελλάδας ή
                  εκτός Ευρωπαϊκού Οικονομικού Χώρου.
                </p>

                <p>
                  Όταν μια τέτοια διαβίβαση εμπίπτει στην ευθύνη της
                  VYRO, εφαρμόζονται οι απαιτούμενες από την
                  εφαρμοστέα νομοθεσία εγγυήσεις για τη διαβίβαση
                  προσωπικών δεδομένων.
                </p>
              </>
            ),
          },

          {
            number: '11',
            title: 'Για πόσο διατηρούμε τα δεδομένα',
            content: (
              <>
                <p>
                  Δεν διατηρούμε προσωπικά δεδομένα περισσότερο από όσο
                  είναι απαραίτητο για τον σκοπό για τον οποίο
                  συλλέχθηκαν, εκτός εάν απαιτείται μεγαλύτερη περίοδος
                  από τη νομοθεσία.
                </p>

                <p>
                  Η περίοδος διατήρησης μπορεί να εξαρτάται από:
                </p>

                <ul>
                  <li>τη διάρκεια της συναλλαγής ή της επικοινωνίας,</li>
                  <li>
                    υποχρεώσεις λογιστικής, φορολογικής ή άλλης νόμιμης
                    τήρησης αρχείων,
                  </li>
                  <li>
                    την ανάγκη διαχείρισης επιστροφών, εγγυήσεων,
                    διαφορών ή νομικών αξιώσεων, και
                  </li>
                  <li>
                    την ανάγκη προστασίας της ασφάλειας της υπηρεσίας.
                  </li>
                </ul>

                <p>
                  Όταν τα δεδομένα δεν είναι πλέον απαραίτητα και δεν
                  υπάρχει νόμιμος λόγος να διατηρούνται, διαγράφονται ή
                  ανωνυμοποιούνται όπου είναι κατάλληλο.
                </p>
              </>
            ),
          },

          {
            number: '12',
            title: 'Cookies και analytics',
            content: (
              <>
                <p>
                  Η VYRO δεν χρησιμοποιεί επί του παρόντος εργαλεία
                  διαφημιστικής παρακολούθησης ή analytics όπως Google
                  Analytics, Meta Pixel ή TikTok Pixel στον ιστότοπο.
                </p>

                <p>
                  Ο ιστότοπος ή οι τεχνικοί πάροχοί του μπορεί να
                  χρησιμοποιούν απολύτως απαραίτητες τεχνολογίες για
                  λειτουργίες όπως ασφάλεια, δρομολόγηση,
                  ολοκλήρωση αγοράς ή διατήρηση τεχνικής συνεδρίας.
                </p>

                <p>
                  Εάν στο μέλλον προστεθούν μη απαραίτητα analytics,
                  διαφημιστικά cookies ή παρόμοιες τεχνολογίες, η
                  παρούσα Πολιτική και, όπου απαιτείται, οι μηχανισμοί
                  συγκατάθεσης θα ενημερωθούν πριν από τη σχετική
                  χρήση.
                </p>
              </>
            ),
          },

          {
            number: '13',
            title: 'Marketing',
            content: (
              <>
                <p>
                  Η VYRO δεν χρησιμοποιεί επί του παρόντος τα δεδομένα
                  επισκεπτών του ιστοτόπου για συμπεριφορική
                  διαφημιστική παρακολούθηση.
                </p>

                <p>
                  Εάν στο μέλλον χρησιμοποιηθούν προσωπικά δεδομένα για
                  άμεσο ηλεκτρονικό marketing, αυτό θα γίνεται σύμφωνα
                  με τις εφαρμοστέες απαιτήσεις και τα σχετικά
                  δικαιώματα επιλογής ή εναντίωσης.
                </p>
              </>
            ),
          },

          {
            number: '14',
            title: 'Αυτοματοποιημένες αποφάσεις και profiling',
            content: (
              <>
                <p>
                  Η VYRO δεν πραγματοποιεί επί του παρόντος
                  αποκλειστικά αυτοματοποιημένη λήψη αποφάσεων ή
                  profiling που παράγει νομικά αποτελέσματα ή σας
                  επηρεάζει με παρόμοιο σημαντικό τρόπο.
                </p>
              </>
            ),
          },

          {
            number: '15',
            title: 'Ασφάλεια δεδομένων',
            content: (
              <>
                <p>
                  Λαμβάνουμε εύλογα τεχνικά και οργανωτικά μέτρα για
                  την προστασία προσωπικών δεδομένων από μη
                  εξουσιοδοτημένη πρόσβαση, απώλεια, αλλοίωση ή
                  αποκάλυψη.
                </p>

                <p>
                  Ωστόσο, κανένα σύστημα ηλεκτρονικής μετάδοσης ή
                  αποθήκευσης δεν μπορεί να εγγυηθεί απόλυτη ασφάλεια.
                </p>

                <p>
                  Για τον λόγο αυτό ζητάμε επίσης από τους πελάτες να
                  μην αποστέλλουν περιττές ευαίσθητες πληροφορίες μέσω
                  μη ασφαλών ή ακατάλληλων καναλιών.
                </p>
              </>
            ),
          },

          {
            number: '16',
            title: 'Τα δικαιώματά σας',
            content: (
              <>
                <p>
                  Σύμφωνα με τον GDPR και όπου πληρούνται οι σχετικές
                  προϋποθέσεις, μπορεί να έχετε δικαιώματα όπως:
                </p>

                <ul>
                  <li>δικαίωμα ενημέρωσης,</li>
                  <li>δικαίωμα πρόσβασης,</li>
                  <li>δικαίωμα διόρθωσης ανακριβών δεδομένων,</li>
                  <li>δικαίωμα διαγραφής σε ορισμένες περιπτώσεις,</li>
                  <li>δικαίωμα περιορισμού της επεξεργασίας,</li>
                  <li>δικαίωμα φορητότητας δεδομένων όπου εφαρμόζεται,</li>
                  <li>δικαίωμα εναντίωσης όπου εφαρμόζεται, και</li>
                  <li>
                    δικαιώματα σχετικά με ορισμένες αυτοματοποιημένες
                    αποφάσεις.
                  </li>
                </ul>

                <p>
                  Ορισμένα δικαιώματα δεν είναι απόλυτα και μπορεί να
                  περιορίζονται όταν η VYRO υποχρεούται νόμιμα να
                  διατηρήσει ή να επεξεργαστεί συγκεκριμένες
                  πληροφορίες.
                </p>
              </>
            ),
          },

          {
            number: '17',
            title: 'Πώς ασκείτε τα δικαιώματά σας',
            content: (
              <>
                <p>
                  Για να υποβάλετε αίτημα σχετικά με προσωπικά δεδομένα,
                  μπορείτε να επικοινωνήσετε με τη VYRO μέσω WhatsApp:
                </p>

                <div className="terms-info-card">
                  <p>
                    <strong>VYRO</strong>
                  </p>
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
                  Μπορεί να ζητήσουμε πληροφορίες που είναι εύλογα
                  απαραίτητες για την επιβεβαίωση της ταυτότητάς σας
                  πριν ανταποκριθούμε σε αίτημα που αφορά προσωπικά
                  δεδομένα.
                </p>

                <p>
                  Τα αιτήματα θα εξετάζονται εντός των προθεσμιών που
                  προβλέπει η εφαρμοστέα νομοθεσία.
                </p>
              </>
            ),
          },

          {
            number: '18',
            title: 'Καταγγελία στην εποπτική αρχή',
            content: (
              <>
                <p>
                  Εάν θεωρείτε ότι η επεξεργασία προσωπικών δεδομένων
                  παραβιάζει την εφαρμοστέα νομοθεσία, έχετε το
                  δικαίωμα να υποβάλετε καταγγελία στην αρμόδια
                  εποπτική αρχή.
                </p>

                <p>
                  Στην Ελλάδα, η αρμόδια εποπτική αρχή είναι η
                  <strong>
                    {' '}
                    Αρχή Προστασίας Δεδομένων Προσωπικού Χαρακτήρα
                  </strong>
                  .
                </p>

                <p>
                  Σας ενθαρρύνουμε επίσης να επικοινωνήσετε πρώτα με τη
                  VYRO ώστε να έχουμε την ευκαιρία να εξετάσουμε και να
                  επιλύσουμε το ζήτημα.
                </p>
              </>
            ),
          },

          {
            number: '19',
            title: 'Σύνδεσμοι και υπηρεσίες τρίτων',
            content: (
              <>
                <p>
                  Ο ιστότοπος μπορεί να περιλαμβάνει συνδέσμους προς
                  υπηρεσίες τρίτων, όπως υπηρεσίες πληρωμών,
                  επικοινωνίας ή άλλους εξωτερικούς ιστοτόπους.
                </p>

                <p>
                  Οι τρίτοι αυτοί μπορεί να επεξεργάζονται προσωπικά
                  δεδομένα σύμφωνα με τις δικές τους πολιτικές και
                  υποχρεώσεις. Σας συνιστούμε να διαβάζετε τις σχετικές
                  πολιτικές απορρήτου όταν χρησιμοποιείτε αυτές τις
                  υπηρεσίες.
                </p>
              </>
            ),
          },

          {
            number: '20',
            title: 'Αλλαγές στην Πολιτική Απορρήτου',
            content: (
              <>
                <p>
                  Μπορεί να ενημερώνουμε την παρούσα Πολιτική
                  Απορρήτου όταν αλλάζουν οι υπηρεσίες, οι διαδικασίες
                  επεξεργασίας ή οι εφαρμοστέες απαιτήσεις.
                </p>

                <p>
                  Η πιο πρόσφατη έκδοση θα δημοσιεύεται σε αυτή τη
                  σελίδα με ενημερωμένη ημερομηνία.
                </p>
              </>
            ),
          },

          {
            number: '21',
            title: 'Επικοινωνία',
            content: (
              <>
                <p>
                  Για ερωτήσεις σχετικά με την παρούσα Πολιτική ή την
                  επεξεργασία των προσωπικών σας δεδομένων:
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

        label: 'VYRO · PRIVACY',
        title: 'Privacy Policy',
        intro:
          'This Privacy Policy explains how VYRO collects, uses, stores and protects personal data when you use our website, make a purchase or communicate with us.',
        updated: 'Last updated: 30 September 2026',

        notice:
          'VYRO processes personal data only where there is a lawful purpose and aims to limit collection to information necessary for providing and operating our services.',

        sections: [
          {
            number: '01',
            title: 'Who Is Responsible for Your Data',
            content: (
              <>
                <p>
                  For the processing activities described in this
                  Policy, <strong>VYRO</strong> acts as the data
                  controller where applicable under data-protection
                  law.
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
                  You can use these contact details for privacy
                  questions or to exercise applicable data-protection
                  rights.
                </p>
              </>
            ),
          },

          {
            number: '02',
            title: 'Personal Data We May Collect',
            content: (
              <>
                <p>
                  Depending on how you use VYRO, we may process
                  categories of personal data including:
                </p>

                <ul>
                  <li>first and last name,</li>
                  <li>telephone number,</li>
                  <li>
                    email address where provided in connection with an
                    order or communication,
                  </li>
                  <li>billing and/or delivery address,</li>
                  <li>
                    order information and products purchased,
                  </li>
                  <li>
                    payment and transaction information made available
                    to us by the relevant payment provider,
                  </li>
                  <li>
                    communications you send to us through WhatsApp or
                    another available channel,
                  </li>
                  <li>
                    information required for invoicing, accounting or
                    other legal obligations where applicable, and
                  </li>
                  <li>
                    basic technical information that may be necessary
                    for the secure and proper operation of the website.
                  </li>
                </ul>

                <p>
                  We do not ask you to send payment-card details,
                  passwords or unnecessary sensitive information
                  through WhatsApp.
                </p>
              </>
            ),
          },

          {
            number: '03',
            title: 'How We Collect Personal Data',
            content: (
              <>
                <p>
                  Most personal information we process is provided
                  directly by you when you:
                </p>

                <ul>
                  <li>make or attempt to make a purchase,</li>
                  <li>provide delivery information,</li>
                  <li>
                    contact us through WhatsApp or another channel,
                  </li>
                  <li>request a wholesale quote,</li>
                  <li>request a return or support, or</li>
                  <li>
                    provide information required to complete a
                    transaction.
                  </li>
                </ul>

                <p>
                  We may also receive limited information from payment
                  providers, delivery companies or other service
                  providers involved in completing a transaction.
                </p>
              </>
            ),
          },

          {
            number: '04',
            title: 'Why We Use Your Data',
            content: (
              <>
                <p>We may use personal data to:</p>

                <ul>
                  <li>process and fulfil orders,</li>
                  <li>
                    process payments through relevant payment
                    providers,
                  </li>
                  <li>arrange delivery of products,</li>
                  <li>communicate about orders,</li>
                  <li>respond to customer enquiries,</li>
                  <li>
                    process returns, withdrawals, complaints or
                    support issues,
                  </li>
                  <li>process wholesale enquiries,</li>
                  <li>
                    prevent or investigate fraud and misuse where
                    necessary and lawful,
                  </li>
                  <li>
                    comply with accounting, tax or other legal
                    obligations, and
                  </li>
                  <li>
                    maintain the security and proper operation of the
                    website.
                  </li>
                </ul>
              </>
            ),
          },

          {
            number: '05',
            title: 'Legal Bases for Processing',
            content: (
              <>
                <p>
                  Depending on the processing activity, we may rely on:
                </p>

                <ul>
                  <li>
                    processing necessary to enter into or perform a
                    contract with you,
                  </li>
                  <li>
                    processing necessary for compliance with an
                    applicable legal obligation,
                  </li>
                  <li>
                    VYRO's legitimate interests where lawful and not
                    overridden by your rights and freedoms, or
                  </li>
                  <li>
                    your consent where consent is the appropriate legal
                    basis.
                  </li>
                </ul>

                <p>
                  Where processing is based on consent, you may
                  withdraw that consent in accordance with applicable
                  law. Withdrawal does not affect the lawfulness of
                  processing carried out before withdrawal.
                </p>
              </>
            ),
          },

          {
            number: '06',
            title: 'Orders and Payments',
            content: (
              <>
                <p>
                  When you make a purchase, we process information
                  necessary for the order, payment, delivery and
                  applicable after-sales support.
                </p>

                <p>
                  Payments may be processed by third-party payment
                  providers. A payment provider may process payment
                  information under its own privacy policy and legal
                  obligations.
                </p>

                <p>
                  VYRO does not ask customers to send full payment-card
                  details through WhatsApp.
                </p>
              </>
            ),
          },

          {
            number: '07',
            title: 'WhatsApp',
            content: (
              <>
                <p>
                  If you choose to communicate with VYRO through
                  WhatsApp, we will process information you send to us
                  to respond to your enquiry, prepare a quote or manage
                  a related order.
                </p>

                <p>
                  Using WhatsApp also involves processing by the
                  provider of that service under its own terms and
                  privacy policies.
                </p>

                <p>
                  We recommend that you do not send information through
                  WhatsApp that is unnecessary for your enquiry or
                  order.
                </p>
              </>
            ),
          },

          {
            number: '08',
            title: 'Delivery and Service Providers',
            content: (
              <>
                <p>
                  To fulfil an order, it may be necessary to provide
                  certain information to delivery or courier
                  companies.
                </p>

                <p>
                  This information is limited to what is reasonably
                  necessary to provide the relevant service, such as
                  your name, contact information and delivery address.
                </p>

                <p>
                  We may also use other technical, professional or
                  financial service providers where necessary for the
                  operation of the business and permitted by law.
                </p>
              </>
            ),
          },

          {
            number: '09',
            title: 'Who May Receive Your Data',
            content: (
              <>
                <p>
                  Where necessary, personal data may be disclosed to
                  categories of recipients including:
                </p>

                <ul>
                  <li>payment providers,</li>
                  <li>delivery and courier companies,</li>
                  <li>website hosting and technical providers,</li>
                  <li>
                    accountants or other professional advisers where
                    required,
                  </li>
                  <li>
                    public authorities where disclosure is legally
                    required, and
                  </li>
                  <li>
                    other providers necessary to deliver a service you
                    requested.
                  </li>
                </ul>

                <p>We do not sell customers' personal data.</p>
              </>
            ),
          },

          {
            number: '10',
            title: 'International Transfers',
            content: (
              <>
                <p>
                  Some third-party technology or communication
                  providers may process information outside Greece or
                  outside the European Economic Area.
                </p>

                <p>
                  Where such a transfer falls within VYRO's
                  responsibility, safeguards required by applicable
                  data-protection law will be applied.
                </p>
              </>
            ),
          },

          {
            number: '11',
            title: 'How Long We Keep Personal Data',
            content: (
              <>
                <p>
                  We do not retain personal data longer than necessary
                  for the purpose for which it was collected unless a
                  longer period is required by law.
                </p>

                <p>Retention may depend on:</p>

                <ul>
                  <li>
                    the duration of the transaction or communication,
                  </li>
                  <li>
                    accounting, tax or other statutory record-keeping
                    requirements,
                  </li>
                  <li>
                    the need to manage returns, warranties, disputes or
                    legal claims, and
                  </li>
                  <li>
                    the need to protect the security of the service.
                  </li>
                </ul>

                <p>
                  When information is no longer necessary and there is
                  no lawful reason to retain it, it will be deleted or
                  anonymised where appropriate.
                </p>
              </>
            ),
          },

          {
            number: '12',
            title: 'Cookies and Analytics',
            content: (
              <>
                <p>
                  VYRO does not currently use advertising-tracking or
                  analytics tools such as Google Analytics, Meta Pixel
                  or TikTok Pixel on the website.
                </p>

                <p>
                  The website or its technical providers may use
                  strictly necessary technologies for functions such
                  as security, routing, checkout or maintaining a
                  technical session.
                </p>

                <p>
                  If non-essential analytics, advertising cookies or
                  similar technologies are introduced in the future,
                  this Policy and, where required, consent mechanisms
                  will be updated before the relevant use.
                </p>
              </>
            ),
          },

          {
            number: '13',
            title: 'Marketing',
            content: (
              <>
                <p>
                  VYRO does not currently use website visitor data for
                  behavioural advertising tracking.
                </p>

                <p>
                  If personal data is used for direct electronic
                  marketing in the future, this will be done in
                  accordance with applicable requirements and relevant
                  opt-in or objection rights.
                </p>
              </>
            ),
          },

          {
            number: '14',
            title: 'Automated Decision-Making and Profiling',
            content: (
              <>
                <p>
                  VYRO does not currently carry out solely automated
                  decision-making or profiling that produces legal
                  effects concerning you or similarly significantly
                  affects you.
                </p>
              </>
            ),
          },

          {
            number: '15',
            title: 'Data Security',
            content: (
              <>
                <p>
                  We take reasonable technical and organisational
                  measures to protect personal data against
                  unauthorised access, loss, alteration or disclosure.
                </p>

                <p>
                  However, no electronic transmission or storage
                  system can guarantee absolute security.
                </p>

                <p>
                  We therefore also ask customers not to send
                  unnecessary sensitive information through insecure
                  or inappropriate communication channels.
                </p>
              </>
            ),
          },

          {
            number: '16',
            title: 'Your Data Protection Rights',
            content: (
              <>
                <p>
                  Under the GDPR and where the relevant conditions are
                  met, you may have rights including:
                </p>

                <ul>
                  <li>the right to be informed,</li>
                  <li>the right of access,</li>
                  <li>the right to rectify inaccurate information,</li>
                  <li>
                    the right to erasure in certain circumstances,
                  </li>
                  <li>the right to restrict processing,</li>
                  <li>
                    the right to data portability where applicable,
                  </li>
                  <li>the right to object where applicable, and</li>
                  <li>
                    rights concerning certain automated decisions.
                  </li>
                </ul>

                <p>
                  Some rights are not absolute and may be limited where
                  VYRO is legally required to retain or process
                  particular information.
                </p>
              </>
            ),
          },

          {
            number: '17',
            title: 'How to Exercise Your Rights',
            content: (
              <>
                <p>
                  To make a request concerning your personal data, you
                  can contact VYRO through WhatsApp:
                </p>

                <div className="terms-info-card">
                  <p><strong>VYRO</strong></p>
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
                  We may request information reasonably necessary to
                  verify your identity before responding to a request
                  concerning personal data.
                </p>

                <p>
                  Requests will be handled within the time limits
                  required by applicable data-protection law.
                </p>
              </>
            ),
          },

          {
            number: '18',
            title: 'Complaints to the Supervisory Authority',
            content: (
              <>
                <p>
                  If you believe that processing of your personal data
                  infringes applicable data-protection law, you have
                  the right to lodge a complaint with the competent
                  supervisory authority.
                </p>

                <p>
                  In Greece, the competent supervisory authority is
                  the{' '}
                  <strong>
                    Hellenic Data Protection Authority
                  </strong>
                  .
                </p>

                <p>
                  We also encourage you to contact VYRO first so that
                  we have an opportunity to review and address your
                  concern.
                </p>
              </>
            ),
          },

          {
            number: '19',
            title: 'Third-Party Links and Services',
            content: (
              <>
                <p>
                  The website may contain links to third-party
                  services, including payment, communication or other
                  external services.
                </p>

                <p>
                  Those third parties may process personal data under
                  their own privacy policies and legal obligations. We
                  recommend reviewing the relevant privacy information
                  when using those services.
                </p>
              </>
            ),
          },

          {
            number: '20',
            title: 'Changes to This Privacy Policy',
            content: (
              <>
                <p>
                  We may update this Privacy Policy where our services,
                  processing activities or applicable requirements
                  change.
                </p>

                <p>
                  The latest version will be published on this page
                  with an updated revision date.
                </p>
              </>
            ),
          },

          {
            number: '21',
            title: 'Contact',
            content: (
              <>
                <p>
                  For questions about this Policy or the processing of
                  your personal data:
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
    <main id="top" className="site-shell terms-page privacy-page">
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

      {/* PRIVACY NOTICE */}

      <section className="section terms-notice-section">
        <div className="terms-notice">
          <LockKeyhole size={20} />
          <p>{copy.notice}</p>
        </div>
      </section>

      {/* CONTENT */}

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
