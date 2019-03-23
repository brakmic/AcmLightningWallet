module.exports = {
  _: {
    storage_is_encrypted: "L'espace de stockage est chiffré. Mot de passe requis pour le déchiffrer.",
    enter_password: 'Saisir mot de passe',
    bad_password: 'Mauvais mot de passe, ré-essayer',
    never: 'jamais',
    continue: 'Continue',
    ok: 'OK',
  },
  wallets: {
    select_wallet: 'Choix du portefeuille',
    options: 'options',
    createBitcoinWallet: 'In order to use a Lightning wallet, a Bitcoin wallet is needed to fund it. Would you like to continue anyway?',

    list: {
      app_name: 'AcmLNWallet',
      title: 'portefeuilles',
      header:
        'Un portefeuille represente une paire de clées (publique/privée) et une adresse que vous pouvez partager pour recevoir des transactions.',
      add: 'Ajouter un portefeuille',
      create_a_wallet: 'Créer un portefeuille',
      create_a_wallet1: "C'est gratuit et vous pouvez en créer",
      create_a_wallet2: 'autant que vous souhaitez',
      latest_transaction: 'dernière transaction',
      empty_txs1: 'Vos transactions apparaîtront ici,',
      empty_txs2: 'Aucune pour le moment',
      empty_txs1_lightning: 'Lightning wallet should be used for your daily transactions. Fees are unfairly cheap and speed is blazing fast.',
      empty_txs2_lightning: '\nTo start using it tap on "manage funds" and topup your balance.',
      tap_here_to_buy: 'Cliquez ici pour acheter du Bitcoin',
    },
    reorder: {
      title: 'Trier vos portefeuilles',
    },
    add: {
      title: 'ajouter un portefeuille',
      description:
        'Vous pouvez soit scanner et importer un paper wallet (au format WIF - Wallet Import Format), ou créer un nouveau portefeuille. Compatible avec Segwit par defaut.',
      scan: 'Scanner',
      create: 'Créer',
      label_new_segwit: 'Nouveau SegWit',
      label_new_lightning: 'Nouveau Lightning',
      wallet_name: 'nom du portefeuille',
      wallet_type: 'type',
      or: 'ou',
      import_wallet: 'Importer un portefeuille',
      imported: 'Importé',
      coming_soon: 'Bientôt',
      lightning: 'Lightning',
      bitcoin: 'Bitcoin',
    },
    details: {
      title: 'Portefeuille',
      address: 'Adresse',
      type: 'Type',
      label: 'Libelé',
      destination: 'destination',
      description: 'description',
      are_you_sure: 'Êtes vous sur?',
      yes_delete: 'Oui, supprimer',
      no_cancel: 'Non, annuler',
      delete: 'Supprimer',
      save: 'Sauvegarder',
      delete_this_wallet: 'Supprimer ce portefeuille',
      export_backup: 'Exporter / sauvegarder',
      buy_bitcoin: 'Acheter du Bitcoin',
      show_xpub: 'Afficher XPUB du portefeuille',
    },
    export: {
      title: 'export du portefeuille',
    },
    xpub: {
      title: 'XPUB portefeuille',
      copiedToClipboard: 'Copié dans le presse-papiers.',
    },
    import: {
      title: 'importer',
      explanation:
        "Write here your mnemonic, private key, WIF, or anything you've got. AcmLNWallet will do its best to guess the correct format and import your wallet",
      imported: 'Importé',
      error: "Échec de l'import. Merci, de vérifier que les données saisies sont valides.",
      success: 'Succès',
      do_import: 'Importer',
      scan_qr: 'ou scaner un QR code',
    },
    scanQrWif: {
      go_back: 'Retour',
      cancel: 'Annuler',
      decoding: 'Déchiffrage',
      input_password: 'Saisir mot de passe',
      password_explain: 'Ceci est une clée privée chiffrée avec BIP38',
      bad_password: 'Mauvais mot de passe',
      wallet_already_exists: 'Ce portefeuille existe déjà',
      bad_wif: 'Mauvais WIF',
      imported_wif: 'WIF Importé',
      with_address: ' avec adresse ',
      imported_segwit: 'SegWit Importé',
      imported_legacy: 'Legacy Importé',
      imported_watchonly: 'Monitoring Importé',
    },
  },
  transactions: {
    list: {
      tabBarLabel: 'Transactions',
      title: 'transactions',
      description: 'Une liste des transactions entrentes et sortantes de vos portefeuilles',
      conf: 'conf',
    },
    details: {
      title: 'Transaction',
      from: 'De',
      to: 'À',
      copy: 'Copier',
      transaction_details: 'Détails de la transaction',
      show_in_block_explorer: 'Afficher dans le "block explorer"',
    },
  },
  send: {
    header: 'Envoyer',
    details: {
      title: 'créer une transaction',
      amount_field_is_not_valid: 'Champ montant invalide',
      fee_field_is_not_valid: 'Champ frais invalide',
      address_field_is_not_valid: 'Champ adresse invalide',
      total_exceeds_balance: 'Le montant à envoyer excède le montant disponible.',
      create_tx_error: 'There was an error creating the transaction. Please, make sure the address is valid.',
      address: 'adresse',
      amount_placeholder: 'montant à envoyer (en BTC)',
      fee_placeholder: 'plus frais de transaction (en BTC)',
      note_placeholder: 'note (optionnelle)',
      cancel: 'Annuler',
      scan: 'Scanner',
      send: 'Envoyer',
      create: 'Créer',
      remaining_balance: 'Balance restante',
    },
    confirm: {
      header: 'Confirmer',
      sendNow: 'Envoyer maintenant',
    },
    success: {
      done: 'Terminé',
    },
    create: {
      details: 'Details',
      title: 'créer une transaction',
      error: 'Erreur creating transaction. Invalid address or send amount?',
      go_back: 'Retour',
      this_is_hex: 'This is transaction hex, signed and ready to be broadcast to the network.',
      to: 'À',
      amount: 'Montant',
      fee: 'Frais',
      tx_size: 'Taille de la Transaction (TX size)',
      satoshi_per_byte: 'Satoshi par byte',
      memo: 'Memo',
      broadcast: 'Broadcast',
      not_enough_fee: 'Frais insufisants. Veuillez augmenter les frais',
    },
  },
  receive: {
    header: 'Recevoir',
    details: {
      title: 'Partager cette adresse avec le destinataire',
      share: 'partager',
      copiedToClipboard: 'Copier dans le presse-papiers.',
      label: 'Description',
      create: 'Create',
      setAmount: 'Revevoir avec montant',
    },
  },
  buyBitcoin: {
    header: 'Acheter du Bitcoin',
    tap_your_address: 'Cliquez votre adresse pour la copier:',
    copied: 'Copié dans le presse-papiers!',
  },
  settings: {
    header: 'réglages',
    plausible_deniability: 'Déni plausible...',
    storage_not_encrypted: 'Stockage: non chiffré',
    storage_encrypted: 'Stockage: chiffré',
    password: 'Mot de passe',
    password_explain: "Créer le mot de passe utilisé pour déchiffrer l'espace de stockage principal",
    retype_password: 'Re-saisir votre mot de passe',
    passwords_do_not_match: 'Les mots de passe ne correspondent pas',
    encrypt_storage: 'Chiffrer le stockage',
    lightning_settings: 'Lightning settings',
    lightning_settings_explain:
      'To connect to your own LND node please install LndHub' +
      ' and put its URL here in settings. Leave blank to use default ' +
      'ndHub\n (lndhub.io)',
    save: 'save',
    about: 'À propos',
    language: 'Langue',
    currency: 'Devise',
  },
  plausibledeniability: {
    title: 'Déni plausible',
    help:
      'Dans certaines circonstances, vous serez peut-être forcé par un tiers à communiquer ' +
      'votre mot de passe. Pour protéger vos biens, AcmLNWallet permet de créer un autre ' +
      'espace de stockage, avec un mot de passe différent. Sous la contrainte, ' +
      'vous pourrez divulger ce mot de passe au tier. Quand il est saisi ' +
      "AcmLNWallet, débloquera se 'faux' espace de stockage. Le tiers pourra " +
      'confondre ces données avec des données légitimes, votre espace de stockage ' +
      "principal restera sécurisé et hors d'atteinte.",
    help2: 'New storage will be fully functional, and you can store some ' + 'minimum amounts there so it looks more believable.',
    create_fake_storage: 'Créer un faux espace de stockage chiffré',
    go_back: 'Retour',
    create_password: 'Créer un mot de passe',
    create_password_explanation: 'Le mot de passe pour le faux espace de stockage ne doit pas être le même que celui du stockage principal',
    password_should_not_match: 'Le mot de passe pour le faux espace de stockage ne doit pas être le même que celui du stockage principal',
    retype_password: 'Confirmation du mot de passe',
    passwords_do_not_match: 'Vos mot de passe ne sont pas identiques, veillez ré-essayer',
    success: 'Succès',
  },
  lnd: {
    title: 'gérer vos fonds',
    choose_source_wallet: 'Choisir un portefeuille source',
    refill_lnd_balance: 'Déposer des fonds dans votre portfeuille Lightning',
    refill: 'Déposer des fonds',
    withdraw: 'Retirer des fonds',
    placeholder: 'Invoice',
    expired: 'Expiré',
    sameWalletAsInvoiceError: 'Vous ne pouvez pas payer une facture avec le même portefeuille utilisé pour la créer.',
  },
};
