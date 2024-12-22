import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://xxahjjlkjllawvytiyaz.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh4YWhqamxramxsYXd2eXRpeWF6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ3NzQ5MTYsImV4cCI6MjA1MDM1MDkxNn0.cYL_n4ahuxYzsuW-8IIG-HpZrp3OpbWGEj_WDAGofuY';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
