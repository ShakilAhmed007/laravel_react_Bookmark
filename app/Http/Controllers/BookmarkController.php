<?php

namespace App\Http\Controllers;

use App\Models\Bookmark;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class BookmarkController extends Controller
{
    public function index()
    {
        $bookmarks = Bookmark::query()
                    ->where('user_id', Auth::user()->id)
                    ->get();
        return Inertia::render('Bookmark/List/index', compact('bookmarks'));
    }
}
